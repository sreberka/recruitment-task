articleApp.controller('LoginCtrl', function ($http, $scope, $rootScope, $location) {
    let getWeather = function (city) {
        return $http({
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=9e24375f72d2d267c6f0787fcd14bf12&units=metric'
        })
    }

    $scope.loginSubmit = function () {
        let user = $rootScope.items.filter(item => item.email === this.enteredEmail && item.password === this.enteredPassword)
        if(user.length > 0){
            $rootScope.currentUser = user[0];
            $rootScope.currentUser.weather = {"base": 18};
            if(!$scope.currentUser.isAdmin){
                getWeather($rootScope.currentUser.city).then(function (weather) {
                    $rootScope.currentUser.weather = weather.data;
                    $location.path('/home');
                })
            }
            else {
                $location.path('/home');
            }
        }
        this.enteredEmail = '';
        this.enteredPassword = '';
    }
});