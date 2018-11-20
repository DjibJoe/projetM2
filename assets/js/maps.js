	var mapApp=angular.module("mapApp", []);



	mapApp.controller('mapCtrl',function function_name($scope,$http,$location) {

					  var map = new google.maps.Map(document.getElementById('map'), {
					    zoom: 13,
					    center: {lat: 0, lng: 0}
					  });

					  	var infoWindow = new google.maps.InfoWindow({map: map});
	 // essaie HTML5 geolocation.
	 if (navigator.geolocation) {
	 	navigator.geolocation.getCurrentPosition(function(position) {
	 		var pos = {
	 			lat: position.coords.latitude,
	 			lng: position.coords.longitude
	 		};

	 		infoWindow.setPosition(pos);
	 		infoWindow.setContent('vos etes ici.');
	 		map.setCenter(pos);
	 	}, function() {
	 		handleLocationError(true, infoWindow, map.getCenter());
	 	});
	 } else {
	          // le navigateur ne supporte pas google map
	          
	          handleLocationError(false, infoWindow, map.getCenter());
	      }

			  var trafficLayer = new google.maps.TrafficLayer();
			  trafficLayer.setMap(map);
			
	})