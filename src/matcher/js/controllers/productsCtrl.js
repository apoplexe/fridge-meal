export default class productsCtrl{
	constructor(){
	}
	getProducts(getProducts){
		getProducts.async().then(
			d => {
				this.productList = d;
			}
		)
	}
}

productsCtrl.$inject = ['getProducts'];
