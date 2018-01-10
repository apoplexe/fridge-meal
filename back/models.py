from database import db

class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    products_id = db.Column(db.Integer, db.ForeignKey('product.id'))
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    tools_id = db.Column(db.Integer, db.ForeignKey('tools.id'))
    name = db.Column(db.String(75))
    people = db.Column(db.Integer)
    cooking_time = db.Column(db.Integer)

    def __repr__(self):
        return self.name

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(75), unique=True)
    product = db.relationship('Product', backref='category', lazy=True)
    recipe = db.relationship('Recipe', backref='category', lazy=True)

    def __repr__(self):
        return self.name

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    name = db.Column(db.String(75), unique=True)
    image = db.Column(db.String(175), unique=True)
    recipe = db.relationship('Recipe', backref='product', lazy=True)

    def __repr__(self):
        return self.name

class Step(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipe.id'))
    description = db.Column(db.String(175))

    def __repr__(self):
        return self.description

class Tools(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(175))
    recipe = db.relationship('Recipe', backref='tools', lazy=True)

    def __repr__(self):
        return self.name
