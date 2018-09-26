

function indexCtrl($scope, UserService) {
    console.log("reached indexCtrl");
    $scope.title = "Home";
    UserService.testVar = "Hi";
    console.log("testVar", UserService.testVar);
};

angular
    .module('myApp')
    .controller('indexCtrl', indexCtrl)
    .factory('UserService', function() {
        return {
            testVar : ''
        };
    });




















