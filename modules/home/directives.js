'use strict';
 
angular.module('Home')
 
.directive('planetDirective', function() {
   
  return {
    restrict: 'E',
    scope: {
       planetName: '@planetName',
       planetSize:'@planetSize',
       maxSize:'@maxSize'
    },
    templateUrl: 'modules/home/views/plenet.html',
    replace:true
  };
});
