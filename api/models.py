from database import db

class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    products_id = db.Column(db.Integer, db.ForeignKey('product.id'))
    category_id = db.Column(db.Integer, db.ForeignKey('recipe_category.id'))
    tools_id = db.Column(db.Integer, db.ForeignKey('tools.id'))
    name = db.Column(db.String(75))
    people = db.Column(db.Integer)
    cooking_time = db.Column(db.Integer)

    @property
    def serialize(self):
        return {
        'id': self.id,
        'name': self.name,
        'products_id': self.products_id,
        'category_id': self.category_id,
        'tools_id': self.tools_id,
        'people': self.people,
        'cooking_time': self.cooking_time
        }

    def __repr__(self):
        return self.name

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    category_id = db.Column(db.Integer, db.ForeignKey('product_category.id'))
    name = db.Column(db.String(75), unique=True)
    image = db.Column(db.String(175), unique=True)
    recipe = db.relationship('Recipe', backref='product', lazy=True)

    @property
    def serialize(self):
        return {
        'image': self.image,
        'id': self.id,
        'category_id': self.category_id,
        'name': self.name,
        'recipe': self.recipe
        }

    def __repr__(self):
        return self.name

class ProductCategory(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(75), unique=True)
    product = db.relationship('Product', backref='category', lazy=True)

    @property
    def serialize(self):
        return {
        'id': self.id,
        'name': self.name,
        'product': self.product
        }

    def __repr__(self):
        return self.name

class RecipeCategory(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(75), unique=True)
    recipe = db.relationship('Recipe', backref='category', lazy=True)

    def __repr__(self):
        return self.name

class Step(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipe.id'))
    description = db.Column(db.String(175))

    @property
    def serialize(self):
        return {
        'id': self.id,
        'recipe_id': self.recipe_id,
        'description': self.description
        }

    def __repr__(self):
        return self.description

class Tools(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(175), unique=True)
    recipe = db.relationship('Recipe', backref='tools', lazy=True)

    @property
    def serialize(self):
        return {
        'id': self.id,
        'recipe': self.recipe,
        'name': self.name
        }

    def __repr__(self):
        return self.name
