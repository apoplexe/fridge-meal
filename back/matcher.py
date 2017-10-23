# -*- coding:utf-8 -*-

from database import db
from flask import Flask, request, jsonify

import os.path
from sqlalchemy.exc import IntegrityError

from models import Product, Recipe

app = Flask(__name__)

error_msg = [
    {"name": "Glissez-déposez un ingrédient pour trouver une recette adaptée !"}
]
await_product = [
    {"name": "Ajoutez un ingrédient à la liste"}
]

def match(recipe, products):
    if products[0] == 'undefined':
        return jsonify(error_msg)
    else:
        for p in products:
            if int(p) != recipe['products_id']:
                return False

    return True

# /recipes?products=34,28,90
@app.route('/recipes', methods=['GET', 'POST'])
def search_recipes():
    recipes = []

    if request.method == 'GET':

        products = request.args.get('products', "")
        recipeList = Recipe.query.all()

        if len(products) == 0 or products == 'undefined':
            return jsonify(error_msg)

        products = products.split(',')
        results = []

        for r in recipeList:
            recipes.append({'id': r.id, 'name': r.name, 'products_id': r.products_id})

        for r in recipes:
            if match(r, products):
                results.append(r)

        return jsonify(results)

    if request.method == 'POST':
        recipe = Recipe()
        recipe.name = request.get_json(force=True)['name']
        recipe_products = request.get_json(force=True)['products']
        recipe_products = recipe_products.split(',')
        products_id = []

        for r in recipe_products:
            product = Product()
            product.name = r

            try:

                db.session.add(product)
                db.session.commit()
            except IntegrityError:
                db.session.rollback()
                print("Duplicate entry detected!")

        productList = Product.query.all()

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
def search_products():
    products = []
    productsList = Product.query.all()

    if len(productsList) > 0:
        for p in Product.query.all():
            products.append({'id': p.id, 'name': p.name})
    else:
        if len(products) == 0:
            products.append({'id':0, 'name':await_product[0]['name']})

    return jsonify(products)

if __name__=='__main__':
    app.config['DEBUG'] = True
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    dbpath = os.path.abspath(os.getcwd()) + '/db/matcher.db'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + dbpath

    db.init_app(app)

    with app.app_context():
        db.create_all()

    app.run()
