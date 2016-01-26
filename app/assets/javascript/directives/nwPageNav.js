angular.module('NoteWrangler').directive('nwPageNav', function(){
    return {
        replace: true, //maked the html nicer
        restrict: "E",
        templateUrl: 'assets/templates/directives/nwPageNav.html',
        controller: function($scope, $location) {
            $scope.isPage = function(name) {
                return new RegExp("/" + name + "($|/)").test($location.path());
            };
        }
    };
});