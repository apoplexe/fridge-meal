# -*- coding:utf-8 -*-

from flask import Flask, request, jsonify

app = Flask(__name__)


products= [
    {"id": 0, "name": "pastèque"},
    {"id": 1, "name": "steak"},
    {"id": 2, "name": "fromage"}
]

recipes = [
    {"id": 0, "name": "tarte", "products":[2, 1]},
    {"id": 1, "name": "blanquette", "products": [0]},
    {"id": 2, "name": "pareo", "products": [2, 0]}
]

error_msg = [
    {"name": "Glissez-déposez un ingrédient pour trouver une recette adaptée !"}
]
await_product = [
    {"name": "Glissez-déposez un ingrédient ici !"}
]

def match(recipe, products):
    if products[0] == 'undefined':
        return jsonify(error_msg)
    else:
        for p in products:
            print('salut jojo ' + p)
            if int(p) not in recipe['products']:
                return False

    return True

# /recipes?products=34,28,90
@app.route('/recipes')
def search_recipes():
    products = request.args.get('products', "")

    if len(products) == 0 or products == 'undefined':
        return jsonify(error_msg)

    products = products.split(',')
    results = []

    for r in recipes:
        if match(r, products):
            results.append(r)

    return jsonify(results)

@app.route('/products')
def search_products():
    # if len(products) == 0 or products == 'undefined':
    #     return jsonify(products)

    return jsonify(products)

if __name__=='__main__':
	app.run(debug=True)