angular
	.module("mealMaker")
	.factory('reciper', function(){
		return {
			'products': [
			{
				'name': 'orange'
			},
			{
				'name': 'pomme'
			},
			{
				'name': 'banane'
			}],
			'recipes': [
			{
				'name': 'compote pomme-banane',
				'products': [
				{
					'name': 'pomme',
				},
				{
					'name': 'banane'
				}],
				'recipe': 'mélangez les pommes écrasées, avec les bananes écrasées'
			}],
			'list-products': function(){
				 
			}


		};
	});