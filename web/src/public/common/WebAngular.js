var appDependencies = [
    'ui.router',
    'WebAngularDirectives',
    'WebAngularControllers',
    'WebAngularServices',
    'WebAngularPartials',
    'WebAngularDefinitions',
];


var WebAngular = {
    App: angular.module('WebAngularApp', appDependencies),
    Directives: angular.module('WebAngularDirectives', []),
    Controllers: angular.module('WebAngularControllers', []),
    Services: angular.module('WebAngularServices', []),
    Partials: angular.module('WebAngularPartials', []),
    Definitions: angular.module('WebAngularDefinitions', [])    
};

function defaultStateProvider($stateProvider, $urlRouterProvider) {
    'use strict';

    $urlRouterProvider
        .otherwise('/');

    var WebAngular = {
        url: '/',
        templateUrl: './_WebAngular/WebAngular-app.html'
    };

    $stateProvider
        .state('web-angular', WebAngular)
    ;
}

function run($rootScope) {
    'use strict';
    console.log('WebAngular starting');
}


WebAngular
    .App
    .config(['$stateProvider', '$urlRouterProvider', defaultStateProvider])
    .run(['$rootScope', run]);


window.WebAngular = WebAngular;
