var myAPP=angular.module("myAPP", ['ngRoute','angularUtils.directives.dirPagination']);


myAPP.controller('mapCtrl',function ($scope,$http,$location,$routeParams) {

	$scope.logements=[];

		


   
	  
		
var id =document.getElementById('id').value;
var x =document.getElementById('x').value;
var y =document.getElementById('y').value;
var annee =document.getElementById('annee').value;

	map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: parseFloat(x), lng: parseFloat(y)},
      zoom: 8
    });

console.log(x+"  "+document.getElementById('y').value)
		
		

	   $http.get("http://localhost:3000/api/puppies/"+annee)
			 .success(function(donnees) {
			 	for (var i = 0; i < donnees.data.length; i++) 
			 		$scope.logements.push(donnees.data[i]);
			 		
			 	

			 	
			 	
			 	
			 	for (var i = 0; i < $scope.logements.length; i++) {
			 		
			 		if ($scope.logements[i].id==Number(id)) {
					console.log($scope.logements[i].nature )
			 		
			 		var marker = new google.maps.Marker({
			    		position: {lat:parseFloat(x), lng:parseFloat(y)},
			    		map: map,
			    		title: $scope.logements[i].nature
			 		 });
					marker.setMap(map);
				 }
			 	
			 	
			}
			});	 

	 

	  	 


})










