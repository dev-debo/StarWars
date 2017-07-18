'use strict';
 
angular.module('Home')
 
.service('PlanetService',
    ['$http', '$rootScope', '$timeout',
    function ($http, $rootScope, $timeout) {
        var plenetservice = {};
	
        plenetservice.GetPlanets = function (callback) {
            		
            $http.get('modules/home/plenets.json')
                .success(function (response) {   
			callback(response);         
                });

        };
 
        plenetservice.GetPlenetsByName = function (plenetName) {
            
            $rootScope.globals = {
                currentUser: {
                    username: username,
                    authdata: authdata
                }
            };
 
            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
            $cookieStore.put('globals', $rootScope.globals);
        };
  
        return plenetservice;
    }])
 
.factory('Base64', function () {
    /* jshint ignore:start */
 
    
    return {
        encode: function (input) {
            return input.split("").reverse().join("");
        },
 
        decode: function (input) {
            return input.split("").reverse().join("");
        }
    };
 
    /* jshint ignore:end */
});
