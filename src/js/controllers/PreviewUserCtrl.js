articleApp.controller('PreviewUserCtrl', function ($scope) {
    $scope.previewTodo = function (item) {
        if(item.previewing === true) {
            return item
        }
    };
});