class recipeCtrl{
    constructor($scope){
        this.$scope = $scope;

        this.emptyRecipeList = false;
        this.stepActive = true;
        this.infos = false;
        this.insta = false;
        this.recipe = true;
        this.recipeIn = false;
        this.filters = [
            {
                name: 'name',
                active: true
            },
            {
                name: 'category',
                active: false
            },
            {
                name: 'time',
                active: false
            }
        ];
        this.$scope.$watch('vm.recipesList', this.watching());
    }
    watching(N, O){
        if (this !== undefined) {
            if (this.$scope.$parent.vm.recipesList.length === 0) {
                this.emptyRecipeList = N !== undefined && N !== 0 ? false : true;
            }

            this.recipeIn = false;
        }
        return (N)=>{
            this.emptyRecipeList = N.length > 0 ? false : true;
            this.recipeIn = false;
        }
    }
    showRecipe(name){
        this.recipeIn = true;
        this.recipeNameMatch = name;
    }
    toggleStep(){
        this.stepActive = !this.stepActive;
    }

    panel(panel){
        switch (panel) {
            case 'insta':
                this.insta = true;
                this.infos  = false;
                this.recipe  = false;
                break;
            case 'infos':
                this.infos = true;
                this.recipe  = false;
                this.insta  = false;
                break;
            case 'recipe':
                this.recipe = true;
                this.infos  = false;
                this.insta  = false;
                break;
            default:

        }
    }
}

recipeCtrl.$inject = ['$scope'];

export default recipeCtrl;
