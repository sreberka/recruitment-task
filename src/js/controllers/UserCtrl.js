articleApp.controller('UserCtrl', function ($http, $scope, $rootScope) {
        let initUsers = function (){
            $http({
                method: 'POST',
                url: '/reload',
                data: $rootScope.items
            })
        }

        $rootScope.items.map(item => item.role === "user" ? item.isAdmin = false : item.isAdmin = true);
        $rootScope.items.map(item => item.editing = false);
        $scope.editUser = function (item) {
            item.editing = !item.editing;
            initUsers();
        };

        $scope.previewUser = function (item) {
            item.previewing = !item.previewing
        };

        $scope.generatePassword = function (item) {
             let createPassword = function() {
                 let length = 6,
                     charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
                     retVal = "";
                 for (let i = 0, n = charset.length; i < length; ++i) {
                     retVal += charset.charAt(Math.floor(Math.random() * n));
                 }
                 return retVal;
            };
            item.password = createPassword();
            $http({
                method: 'POST',
                url: '/send-email',
                json: true,
                data: {
                    "email": item.email,
                    "password": item.password
                }
            })
            initUsers();
        }

        $scope.removeUser = function (itemToRemove) {
            $rootScope.items = $rootScope.items.filter(item => item.id !== itemToRemove.id)
            initUsers();
        }
    });