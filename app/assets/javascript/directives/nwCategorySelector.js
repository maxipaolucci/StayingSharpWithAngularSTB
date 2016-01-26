angular.module('NoteWrangler').directive('nwCategorySelector', function(Category){
    return {
        replace: true, //maked the html nicer
        restrict: "E",
        require: '?ngModel',
        templateUrl: 'assets/templates/directives/nwCategorySelector.html',
        link: function (scope, element, attrs, ngModelCtrl) {
            var activeCategory = {};
            scope.categories = Category.query();
            scope.isActive = function (category) {
                return activeCategory && activeCategory.id === category.id;
            };
            scope.toogleCategory = function (category) {
                if (category === activeCategory) {
                    activeCategory = {};
                } else {
                    activeCategory = category;
                }
                
                //we set the value of the model
                ngModelCtrl.$setViewValue(activeCategory);
            };
            
            ngModelCtrl.$render = function () {
                //render is like a watcher
                //when ever the value of the model changes we change our activeCategory
                activeCategory = ngModelCtrl.$viewValue;
            };
        }
    };
});