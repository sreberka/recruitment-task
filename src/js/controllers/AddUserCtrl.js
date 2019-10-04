articleApp.controller('AddUserCtrl', function ($http, $scope, $rootScope, $location) {
    $scope.addUser = function () {
        let newItem = {
            id: Date.now(),
            role: "user",
            firstName: this.addFirstName,
            lastName: this.addLastName,
            city: this.addCity,
            country: this.addCountry,
            email: this.addEmail,
        };
        $rootScope.items.unshift(newItem);
        this.addFirstName = '';
        this.addLastName = '';
        this.addCity = '';
        this.addCountry = '';
        this.addEmail = '';
        $location.path('/home');

        $http({
            method: 'POST',
            url: '/reload',
            data: $rootScope.items
        })
    };
});