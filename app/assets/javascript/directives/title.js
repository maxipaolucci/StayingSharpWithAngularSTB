//here we override the default title attribute from html to show cool bootstrap tooltips. It is not the best practice to 
//overrride styandard html components but using it carefully could be good.
angular.module('NoteWrangler').directive('title', function($timeout){
    return function(scope, element, attrs) {
        //by default is an A directive and if just return a function angular asume that this is the link() function
        
        $timeout(function () {
            //we use timeout to wait angular to process the tooltip content as an angular expresion {{note.user.name}}
            $(element).tooltip();
        });
        
        //every time the directive is broken down this $destroy event on scope is called, so we realease memory
        scope.$on('$destroy', function () {
            //every time the directive 
            $(element).tooltip('destroy');
        });
    };
});