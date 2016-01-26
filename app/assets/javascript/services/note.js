angular.module('NoteWrangler').factory('NoteFactory', function ($resource){
    return $resource('/notes/:id', {id: "@id"}, {
        update: {
            method: "PUT"
        }
    });
});