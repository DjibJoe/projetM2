
var myAPP=angular.module("myAPP", []);


myAPP.controller('SncfDeparturesCtrl',function function_name($scope,$http) {
	
	$scope.dep_trips = []
	$http.defaults.headers.common.Authorization ='25154647-7ce1-44d9-a0df-dec534e40d55';

	$http.get('https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area%3AOCE%3ASA%3A87343004/departures?')
		.success(function(donnees) {

			var trajets = {};
			for (var i = 0; i < donnees.departures.length; i++) {
				var departures_time = donnees.departures[i].stop_date_time.departure_date_time;
				var hour = departures_time.split("T")  	
				trajets.numero_train = donnees.departures[i].display_informations.headsign
				trajets.mode_commerciale = donnees.departures[i].display_informations.commercial_mode
				trajets.heur_depart= hour[1].charAt(0)+""+hour[1].charAt(1)+""+":"+ hour[1].charAt(2)+""+hour[1].charAt(3)+""
				var destination = donnees.departures[i].display_informations.direction
				trajets.destination= (destination).slice(0,destination.indexOf("("))

					

				$scope.dep_trips.push(trajets)
				trajets = {}

		}
	}).error(function(statut) {
		
	});
	
})


myAPP.controller('SncfArrivalesCtrl',function function_name($scope,$http) {
$scope.arr_trips = []
$http.get('https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area%3AOCE%3ASA%3A87343004/arrivals?')
		.success(function(donnees) {


			var trajets = {};
			for (var i = 0; i < donnees.arrivals.length; i++) {
				var arrival_date = donnees.arrivals[i].stop_date_time.arrival_date_time
				var base_arrival_time = donnees.arrivals[i].stop_date_time.base_arrival_date_time
				var hour = arrival_date.split("T")  	
				trajets.numero_train = donnees.arrivals[i].display_informations.headsign
				trajets.mode_commerciale = donnees.arrivals[i].display_informations.commercial_mode
				trajets.heur_arrivee= hour[1].charAt(0)+""+hour[1].charAt(1)+""+":"+ hour[1].charAt(2)+""+hour[1].charAt(3)+""
				var provenance = donnees.arrivals[i].route.name
				trajets.provenance= (provenance).slice(0,provenance.indexOf(" "))

				if (base_arrival_time != arrival_date) {
					console.log(donnees.arrivals[i].links.id)
				}

				$scope.arr_trips.push(trajets)
				trajets = {}

		}
	}).error(function(statut) {
		
	});
})


