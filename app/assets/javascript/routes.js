angular.module('NoteWrangler').config(function($routeProvider) {
    $routeProvider
    .when('/', {
        redirectTo: '/notes'
    })
    .when('/notes', {
        templateUrl: 'assets/templats/notes/index.html',
        controller: 'NotesIndexController'
    })
    .when('/notes/new', {
        templateUrl: 'assets/templats/notes/new.html',
        controller: 'NotesCreateController'
    })
    .when('/notes/:id', {
        templateUrl: 'assets/templats/notes/show.html',
        controller: 'NotesShowController'
    })
    .when('/notes/:id/edit', {
        templateUrl: 'assets/templats/notes/edit.html',
        controller: 'NotesEditController'
    });
});