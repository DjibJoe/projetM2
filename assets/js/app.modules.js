var monAPP=angular.module('monAPP',[]);
var e=[]
monAPP.controller('mapCtrl',function($scope,$http){
		$scope.mylat;
		$scope.mylonge;
		$scope.societes=[];
		$scope.societe={};
		$scope.s=[];



		/*********initialisation de la map***********/
		map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 11.591166, lng: 43.147070},
	    zoom: 8
	  });

		   

	  // Try HTML5 geolocation.
	  if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function(position) {
	      var pos = {
	        lat: position.coords.latitude,
	        lng: position.coords.longitude
	      };      
	      
	    })
	  } 
	  map.addListener('click', function(e) {
	  	$scope.mylonge=e.latLng+"";
	    clikedPoint(e.latLng, map); 
	    

	  });


	/******************fonction de recuperation de l'endroit cliker***********************/
		  function clikedPoint(latLng, map) {
		  			map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 11.591166, lng: 43.147070},
	    zoom: 8
	  });
var contentString = '<div id="content" >'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">nouvelle soiciete</h1>'+
'<div id="bodyContent">'+
'<form action="php/insertsociete_webMap.php" method="post">'+
'<label for="nom">nom</label>  <input type="text" id="nom" class="form-control" name="nom">'+
'<label for="adresse">adresse</label>  <input type="text" id="adresse" class="form-control" name="adresse" >'+
'<label for="siteweb">site web</label>  <input type="text" id="site web" class="form-control" name="siteweb" >'+
'<label for="telephone">telephone</label>  <input type="text" id="telephone" class="form-control" name="telephone" >'+
'<label for="latitude">latitude</label>  <input type="text" id="latitude" class="form-control" name="latitude" value='+latLng.lat()+' readonly >'+
'<label for="longitude">longitude</label>  <input type="text" id="longitude" class="form-control" name="longitude"value='+latLng.lng()+' readonly >'+
'<select name="type"><option>super marcher</option> <option>quincaillerie</option><option>magasin electrinique</option></select> <br> <button type="submit" class="btn btn-default">enregistrer</button></form>'
'</div>'+
'</div>';
		  
		  var infoWindow = new google.maps.InfoWindow({map: map});
		  infoWindow.setPosition(latLng);
	      infoWindow.setContent(contentString);
	      map.setCenter(latLng);
		  
		 map.panTo(latLng);
		}


	$scope.enregistrer=function() {
		
		
		$http.post("php/insertsociete_webForm.php",$scope.societe);
		
	}
	$scope.charger=function(){
		$http.get("php/allSociete.php").success(function (donnees) {
			$scope.societes=donnees;
			for( i=0;i<$scope.societes.length;i++){
					$scope.s[i]=$scope.societes[i]["nom"];
		var marker = new google.maps.Marker({

    		position: {lat:parseFloat($scope.societes[i]["latitude"]), lng:parseFloat($scope.societes[i]["longitude"])},
    		map: map,
    		title: 'Hello World!',
    		title: $scope.societes[i].nom,
    		icon: 'images/flech.png'
 		 });
		marker.setMap(map);
		console.log($scope.societes[0]["adresse"])
		 
	}
		console.log($scope.s);
			
		});
	}

	$scope.search=function() {
		$http.post("php/societeChercher.php",{"recherche":$scope.recherche}).success(function (data,status) {
			
			console.log("donnees");
		}).error(function(status) {
			console.log(status);
		});
		
	}
			
	$scope.charger();



    $(function () {
    	
    	 $( "#inputSearch" ).autocomplete({
      source: $scope.s
    });
    })
   
});
 