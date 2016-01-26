angular.module('NoteWrangler').controller('NotesCreateController', function($scope, NoteFactory, $location) {
    $scope.note = new NoteFactory();
    $scope.isSubmitting = false;
    
    $scope.saveNote = function(note) {
        $scope.isSubmitting = true;
        note.$save().then(function() {
            //then means success
            $location.path('/notes');
        }).catch(function (){
            //validations
        }).finally(function(note) {
            $scope.isSubmitting = false;
            
        });
        
    };
});


