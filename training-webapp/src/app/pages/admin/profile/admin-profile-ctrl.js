'use strict';

angular.module('trng.admin.profile').controller('adminProfileController', [
    '$log',
    '$scope',
    '$state',
    'StatesNames',
    'LoginModel',
    'AdminService',
    function($log, $scope, $state, StatesNames, LoginModel, AdminService) {
        $scope.init = function() {
            $scope.username = _.cloneDeep(LoginModel.user.username);
        };

        $scope.save = function() {
            AdminService.updateProfile($scope.username, $scope.password).then(function(result) {
                $state.go(StatesNames.login.name);
            });
        };

        $scope.init();
    }
]);
