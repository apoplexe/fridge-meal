from database import db

class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(75))
    products_id = db.Column(db.Integer, db.ForeignKey('product.id'))

    def __repr__(self):
        return self.name

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(75), unique=True)
    recipe = db.relationship('Recipe', backref='product', lazy=True)

    def __repr__(self):
        return self.name
