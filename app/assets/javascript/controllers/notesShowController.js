angular.module('NoteWrangler').controller('NotesShowController', function(NoteFactory, $scope, $routeParams, $location) {
    $scope.note = NoteFactory.get({id: $routeParams.id});
    
    $scope.deleteNote = function (note) {
        note.$remove().then(function () {
            $location.path('/notes');
        });
    };
});


