var app = angular.module('familyapp', []);

app.controller('familyController', function ($scope) {
	      
		  //default boolean values to show hide things
		  $scope.createPage = true;
	      $scope.viewPage = false;
		  $scope.incomplete = false;
		  
		  
		  
		  //members static list
		  $scope.members = [{id:0, firstname:'Prakash', lastname:'Bachuwar', age:65, gender:'Male'},
		                  {id:1, firstname:'Chandrakala', lastname:'Bachuwar', age:55, gender:'Female'} ]
						 
		  //members new list
	      $scope.savecreate = function(gmodel){ //added gmodel for getting form ng-models to controller
	      $scope.viewPage = true;
		  $scope.members.push({firstname: gmodel.firstname, lastname:gmodel.lastname, age:gmodel.age, gender:gmodel.gender})	
		  
		  $scope.familyLength = function ($scope) {return $scope.members.length;}
		  }
		  
		  
		  //delete member 
		  $scope.selectMember = false;
		  $scope.deleteMember = function (id) {
	                //alert($scope.members[id].firstname)	
					
					if($scope.selectMember === true) {
						  alert("test")
						}	  
		  }
		  
		  
		  
		  
	  	});