'use strict';
 
angular.module('Authentication')
 
.factory('AuthenticationService',
    ['Base64', '$http', '$cookieStore', '$rootScope', '$timeout',
    function (Base64, $http, $cookieStore, $rootScope, $timeout) {
        var service = {};
	
        service.Login = function (username, password, callback) {

            /* Dummy authentication for testing, uses $timeout to simulate api call
             ----------------------------------------------*/
            $timeout(function(){
                var response = { success: username === 'test' && password === 'test' };
                if(!response.success) {
                    response.message = 'Username or password is incorrect';
                }
                callback(response);
            }, 1000);


            /* Use this for real authentication
             ----------------------------------------------
		$http({
    			method: 'GET',
    			url: 'https://jsonplaceholder.typicode.com/posts/1',
    			headers: {
        			'Content-Type': 'application/x-www-form-urlencoded'
    			}}).then(function(result) {
           			console.log(result);
       			}, function(error) {
           			console.log(error);
      			 });*/

            /*$http.get($rootScope.rootDir + 'people/?search=' + username+'&format=json')
                .success(function (response) {
			if(response.count == 1)	{
				var user = response.results[0];			
				var userResponse = { success: username === user.name && password === user.birth_year };
				if(!userResponse.success) {
		                    userResponse.message = 'Username or password is incorrect';
                		}
				callback(userResponse);
			}
			else{
				var userResponse = { success: false };
				userResponse.message = 'Username or password is incorrect';
                		
				callback(userResponse);
			}                   
                }).error(function(res){
			console.log(res);
		});
*/
        };
 
        service.SetCredentials = function (username, password) {
            var authdata = Base64.encode(username + ':' + password);
 
            $rootScope.globals = {
                currentUser: {
                    username: username,
                    authdata: authdata
                }
            };
 
            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
            $cookieStore.put('globals', $rootScope.globals);
        };
 
        service.ClearCredentials = function () {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic ';
        };
 
        return service;
    }])
 
.factory('Base64', function () {
    
 
    
    return {
        encode: function (input) {
		/* use real encoding logic */
            return input.split("").reverse().join("");
        },
 
        decode: function (input) {
		/* use real decoding logic */
            return input.split("").reverse().join("");
        }
    };
});
