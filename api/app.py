# -*- coding:utf-8 -*-

from flask import Flask, request, jsonify
from database import db
from flask_cors import CORS

import os.path
import re

from sqlalchemy.exc import IntegrityError
from sqlalchemy.sql.expression import func, select
from models import Product, Recipe, Step, ProductCategory, RecipeCategory, Tools

app = Flask(__name__)
CORS(app)

def match(recipe, products):
    '''
    The parameters are compared, if the recipe's list of products
    match the list of products, we return True
    '''

    # Need to archi that part
    recipe_products = recipe.products_id

    # Optimise this query
    product_list = Product.query.all()

    for product in product_list:
        for product_attr, product_value in enumerate(products):
            if product.id == int(product_value):
                products[product_attr] = product.id

    for product in products:
        if type(recipe_products) == list:
            for product in recipe_products:
                product = int(product)
        else:
            recipe_products = recipe_products.split(',')
            recipe_products = [int(r) for r in recipe_products]

        if product not in recipe_products:
            return False

    return True


# /recipes?products=34,28,90
@app.route('/recipes_match', methods=['GET'])
def recipes_match():
    '''
    GET a list/int of products_id passed to the match function
    return the recipes who matched
    '''

    recipes = []
    results = []
    products_id_list = []

    recipe_list = Recipe.query.all()
    products = request.args.get('products', "")
    products = products.split(',')

    if products == ['']:
        results.append(Recipe.query.order_by(func.random()).first())

        return jsonify(results=[re.serialize for re in results])

    for recipe in recipe_list:
        products_id = recipe.products_id

        if type(products_id) is int:
            products_id_list.append(products_id)
        elif len(products_id) > 1:
            products_id_list = products_id.split(',')

        recipes.append(recipe)

    for recipe in recipes:
        if match(recipe, products):
            results.append(recipe)

    return jsonify(results=[result.serialize for result in results])


# POST new things
def push(item):
    try:
        db.session.add(item)
        db.session.commit()
    except IntegrityError:
        db.session.rollback()
        print("Duplicate entry detected!")

    return False


@app.route('/new_recipe', methods=['POST'])
def new_recipe():
    '''
    Add the object sent by the user to the Recipe instance, and push it to the BDD
    '''
    recipe = Recipe()
    recipe_list = Recipe.query.all()

    recipe.name = request.get_json(force=True)['name']
    recipe.products_id = request.get_json(force=True)['products_id']

    push(recipe)

    return jsonify(recipe=[re.serialize for re in recipe_list])


@app.route('/new_product', methods=['POST'])
def new_product():
    '''
    Add the object sent by the user to the Product instance, and push it to the BDD
    '''

    product = Product()
    productsList = Product.query.all()
    product.name = request.get_json(force=True)['name']

    push(product)

    return jsonify(prod=[p.serialize for p in productsList])


@app.route('/new_tools', methods=['POST'])
def new_tools():
    '''
    Add the object sent by the user to the Tools instance, and push it to the BDD
    '''

    tools = Tools()
    toolsList = Tools.query.all()
    tools.name = request.get_json(force=True)['name']

    push(tools)

    return jsonify(toolsList=[to.serialize for to in toolsList])


@app.route('/new_category/<type>', methods=['POST'])
def new_category(type):
    '''
    Add the object sent by the user to the Category instance, and push it to the BDD
    '''

    if type == 'product':
        category = ProductCategory()
        categoryList = ProductCategory.query.all()
    elif type == 'recipe':
        category = RecipeCategory()
        categoryList = RecipeCategory.query.all()

    category.name = request.get_json(force=True)['name']

    push(category)

    return jsonify(categoryList=[ca.serialize for ca in categoryList])


@app.route('/new_step', methods=['POST'])
def new_step():
    '''
    Add the object sent by the user to the Step instance, and push it to the BDD
    '''

    step = Step()
    stepList = Step.query.all()
    step.name = request.get_json(force=True)['description']

    push(step)

    return jsonify(stepList=[st.serialize for st in stepList])


# GET simple list of each instance
@app.route('/products')
def products():
    productsList = Product.query.all()

    return jsonify(products=[p.serialize for p in productsList])


@app.route('/recipes')
def recipes():
    recipesList = Recipe.query.all()

    return jsonify(recipes=[p.serialize for p in recipesList])


@app.route('/steps')
def steps():
    stepsList = Step.query.all()

    return jsonify(steps=[p.serialize for p in stepsList])


@app.route('/tools')
def tools():
    toolsList = Tools.query.all()

    return jsonify(tools=[p.serialize for p in toolsList])


@app.route('/recipe_category')
def recipe_category():
    categoryList = RecipeCategory.query.all()

    return jsonify(recipe_category=[p.serialize for p in categoryList])


@app.route('/product_category')
def product_category():
    categoryList = ProductCategory.query.all()

    return jsonify(product_category=[p.serialize for p in categoryList])

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
