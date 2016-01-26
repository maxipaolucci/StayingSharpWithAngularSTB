angular.module('NoteWrangler').controller('NotesIndexController', function(NoteFactory, $scope) {
    $scope.notes = NoteFactory.query();
    $scope.search = {};
    window.sc = $scope; //this is just to debug, write window.sc.search in console and see the value in search
});


