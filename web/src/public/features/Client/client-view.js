WebAngular
    .App
    .config(['$stateProvider',
    function ($stateProvider) {
            $stateProvider
                .state('web-angular.client', {
					url: '/',
					views: {
						templateUrl: "client-partial.html",
						controller: "clientCtrl"
					}
				});
 }]);
