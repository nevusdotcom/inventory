'use strict';

/**
 * @ngdoc function
 * @name angularTestingApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the angularTestingApp
 */
angular.module('angularTestingApp')
    .controller('DashboardCtrl', ['$scope', '$http', function (s, h) {
        h.get("https://jsonplaceholder.typicode.com/users")
            .then(
                function (response) {
                    console.log(response.data);
                    s.rowCollection = response.data;
                },
                function (err) {
                    console.log(err);
                }
            );
        s.itemsCollection = [
            {
                "id" : "1",
                "name": "pipe 54 / 6 / 54",
                "brand": "ThisBrand Co.",
                "application": "thus aplication",
                "height":"50",
                "width": "1000",
                "weight": "180",
                "img_url": "../images/black-pipe-fittings.jpg"
            },

        ];

    }]);