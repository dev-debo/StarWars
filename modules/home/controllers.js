'use strict';
 
angular.module('Home').controller('HomeController',
    ['$scope','PlanetService',
    function ($scope,PlanetService) {
	$scope.Planets = [];
	
	console.log($scope.Planets);
	 PlanetService.GetPlanets(function(data){
		$scope.Planets =data;
		$scope.RotationList=[];
		Object.keys($scope.Planets).forEach(function(key) {
  			//get the value of name
  			var val = $scope.Planets[key]["rotation_period"];
  			//push the name string in the array
			if(val!=="unknown")
	  			$scope.RotationList.push(parseInt(val));
		});
		$scope.MaxWidth=Math.max.apply(null,$scope.RotationList)*4;
	});
  	
      
}]);
