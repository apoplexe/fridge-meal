from database import db
# from sqlalchemy import Table, Column, Integer, String

class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(75), unique=True, nullable=False)
    products = db.relationship('Product')

    def __repr__(self):
        return self.name

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(75), unique=True, nullable=False)
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipe.id'), primary_key=True)

    def __repr__(self):
        return self.name
