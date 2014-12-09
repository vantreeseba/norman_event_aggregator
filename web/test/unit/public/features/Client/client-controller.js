'use strict';
describe('Controller: clientCtrl', function () {
//    load the controller's module
    beforeEach(module('WebAngularApp'));

    var scope,
        clientCtrl;

    // Initialize the controller and a mock scope
    beforeEach(inject(
        function injectControllerAndScope($controller, $rootScope) {
            scope = $rootScope.$new();
            clientCtrl = $controller('clientCtrl', {
                $scope: scope
            });
            scope.$apply();
        })
    );

    it('should have a defined scope', function () {
        expect(scope).to.be.defined;
    });
});