# -*- coding:utf-8 -*-

from flask import Flask, request, jsonify
from database import db

import os.path
import re

from sqlalchemy.exc import IntegrityError

from models import Product, Recipe, Step, Category, Tools

app = Flask(__name__)

error_msg = [
    {"name": "Cook It !"}
]
await_product = [
    {"name": "Ajoutez un ingrédient à la liste"}
]

def match(recipe, products):
    recipe_products = recipe['products_id']

    product_list = Product.query.all()

    for pl in product_list:
        for p, pi in enumerate(products):
            if pl.name == pi:
                products[p] = pl.id

    try:
        for p in products:
            if p not in recipe_products:
                return False
    except Exception as e:
        raise

    return True

# /recipes?products=34,28,90
@app.route('/recipes', methods=['GET', 'POST'])
def recipes():
    recipes = []

    if request.method == 'GET':

        products = request.args.get('products', "")
        recipeList = Recipe.query.all()

        # if len(products) == 0 or products == 'undefined':
        #     return jsonify(error_msg)

        products = products.split(',')
        results = []

        for r in recipeList:
            rpi = r.products_id
            rpi_list = []

            if type(rpi) is int:
                rpi_list.append(rpi)
            elif len(rpi) > 1:
                rpi = rpi.split(',')

                for rp in rpi:
                    rp = rpi_list.append(int(rp))

            recipes.append({'id': r.id, 'name': r.name, 'products_id': rpi_list})

        for r in recipes:
            if match(r, products):
                results.append(r)

        return jsonify(results)

    if request.method == 'POST':
        recipe = Recipe()
        recipe.name = request.get_json(force=True)['name']
        recipe_products = request.get_json(force=True)['products']
        recipe_products = re.split('\W', recipe_products)

        for rp in recipe_products:
            if len(rp) == 0:
                del(rp)

        products_id = []

        for r in recipe_products:
            product = Product()
            product.name = r

            try:
                db.session.add(recipe)
                db.session.add(product)
                db.session.commit()
            except IntegrityError:
                db.session.rollback()
                print("Duplicate entry detected!")

        productList = Product.query.all()
        recipeList = Recipe.query.all()

        for p in productList:
            for rp in recipe_products:
                if p.name == rp:
                    products_id.append(p.id)

        products_id = ','.join(str(e) for e in products_id)
        recipe.products_id = products_id

        try:
            db.session.add(recipe)
            db.session.commit()
        except IntegrityError:
            db.session.rollback()
            print("Duplicate entry detected!")

        return jsonify(recipes)

@app.route('/products')
def products():
    products = []
    productsList = Product.query.all()

    if len(productsList) > 0:
        for p in productsList:
            products.append({'id': p.id, 'name': p.name, 'url': p.image})
    else:
        if len(products) == 0:
            products.append({'id':0, 'name':await_product[0]['name']})

    return jsonify(products)

@app.route('/steps')
def steps():
    steps = []
    stepsList = Step.query.all()

    for s in stepsList:
        steps.append({'id':s.id, 'description':s.description, 'recipe_id':s.recipe_id})

    return jsonify(steps)

if __name__=='__main__':
    app.config['DEBUG'] = True
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # dbpath = os.path.abspath(os.getcwd()) + '/db/matcher.db'
    # app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + dbpath
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db/matcher.db'

    db.init_app(app)

    with app.app_context():
        db.create_all()

    app.run()

# multithread
# dependance response for json
# modularize simple route (steps, tools, etc) / match function
