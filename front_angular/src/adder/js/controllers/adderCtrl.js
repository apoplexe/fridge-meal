class adderCtrl{
    constructor(adderSvc){
        this.adderSvc = adderSvc;
        this.url = {
            product: 'new_product',
            recipe: 'new_recipe',
            tool: 'new_tools',
            category: {
                product: 'new_category/product',
                recipe: 'new_category/recipe'
            },
            step: 'new_step'
        };
        this.newTool = 'fourchette';
        this.newProduct = 'butternut';
        this.newStep = 'Faire fondre les oignons';
        this.recipeName = 'tarte en prune';
        this.productsId = '1,2';
        this.newRecipeCategory = 'dessert';
        this.newProductCategory = 'fruit';
    }
    tool(name){
        let data = {
            'name': name
        };

        this.add(this.url.tool, data);
    }
    product(name){
        let data = {
            'name': name
        };

        this.add(this.url.product, data);
    }
    recipeCategory(name){
        let data = {
            'name': name
        };

        this.add(this.url.category.recipe, data);
    }
    productCategory(name){
        let data = {
            'name': name
        };

        this.add(this.url.category.product, data);
    }
    step(description){
        let data = {
            'description': description
        };

        this.add(this.url.step, data);
    }
    recipe(name, productsId){
        let data = {
            'name': name,
            'products_id': productsId
        };

        this.add(this.url.recipe, data);
    }
    add(url, data){
        this.adderSvc.add(url, data).then((d)=>{console.log(d);}, (e)=>{console.log(e);})
    }
}

adderCtrl.$inject = ['adderSvc'];

export default adderCtrl;
