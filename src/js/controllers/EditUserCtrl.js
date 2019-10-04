articleApp.controller('EditUserCtrl', function ($scope) {
    $scope.editingUser = function (item) {
        if(item.editing === true) {
            return item
        }
    };
});