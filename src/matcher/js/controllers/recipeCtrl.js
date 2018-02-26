class recipeCtrl{
    constructor($scope){
        this.$scope = $scope;
        this.focusRecipe = false;
        this.emptyRecipeList = false;

        this.$scope.$watch('vm.recipesList', this.recipeRefresh());
    }
    recipeRefresh(N, O){
        let recipesList = this.$scope.$parent.vm.recipesList;

        if (this !== undefined && recipesList !== undefined) {
            if (recipesList.length === 0) {
                this.emptyRecipeList = N !== undefined && N !== 0 ? false : true;
            }
        }
        return (N)=>{
            this.emptyRecipeList = N.length > 0 ? false : true;
            if (N.length === 1) {
                this.recipeNameMatch = N[0].name;
            }
        }
    }
    showRecipe(name){
        this.focusRecipe = true;
        this.recipeNameMatch = name;
    }
    closeFocus(){
        this.focusRecipe = false;
    }
    toggleStep(){
        this.stepActive = !this.stepActive;
    }
}

recipeCtrl.$inject = ['$scope'];

export default recipeCtrl;
