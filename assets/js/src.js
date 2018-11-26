
var myAPP=angular.module("myAPP", ['ngRoute','angularUtils.directives.dirPagination']);

myAPP.controller('sncfCtrl',function function_name($scope,$http) {
	
	$scope.dep_trips = []
	$scope.arr_trips = []
	$http.defaults.headers.common.Authorization ='25154647-7ce1-44d9-a0df-dec534e40d55';

	$http.get('https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area%3AOCE%3ASA%3A87343004/departures?')
		.success(function(donnees) {

			var trajets = {};
			for (var i = 0; i < donnees.departures.length; i++) {
				var departures_time = donnees.departures[i].stop_date_time.departure_date_time;
				var hour = departures_time.split("T")  	
				trajets.ville_depart = "valenciennes"
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
	$http.get('https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area%3AOCE%3ASA%3A87343004/arrivals?')
		.success(function(donnees) {


			var trajets = {};
			for (var i = 0; i < donnees.arrivals.length; i++) {
				var arrival_date = donnees.arrivals[i].stop_date_time.departure_date_time;
				var hour = arrival_date.split("T")  	
				trajets.ville_depart = "valenciennes"
				trajets.numero_train = donnees.arrivals[i].display_informations.headsign
				trajets.mode_commerciale = donnees.arrivals[i].display_informations.commercial_mode
				trajets.heur_arrivee= hour[1].charAt(0)+""+hour[1].charAt(1)+""+":"+ hour[1].charAt(2)+""+hour[1].charAt(3)+""
				var destination = donnees.arrivals[i].display_informations.direction
				trajets.destination= (destination).slice(0,destination.indexOf("("))
				$scope.arr_trips.push(trajets)
				

				console.log(trajets)
				trajets = {}

		}
	}).error(function(statut) {
		
	});
})


myAPP.controller('aqiCtrl',function function_name($scope,$http) {
	$scope.feature = []
	$http.get('https://services8.arcgis.com/rxZzohbySMKHTNcy/arcgis/rest/services/ind_hdf_agglo/FeatureServer/0/query?where=UPPER(lib_zone)%20like%20%27%25VALENCIENNES%25%27%20AND%20date_echeance%20%3E%3D%20%272018-05-10T22%3A00%3A00.000Z%27%20AND%20date_echeance%20%3C%3D%20%272018-06-10T22%3A00%3A00.000Z%27&outFields=date_echeance,valeur,qualificatif,source,code_zone,lib_zone&outSR=4326&f=json')
		 .success(function (reponses) {
		 	for (var i = 0; i < reponses.features.length; i++) {
		 		console.log(Date(1288323623006))
		 		//console.log("date \t" + Date(reponses.features[i].attributes.date_echeance)+ "\t timestamp \t"+  reponses.features[i].attributes.date_echeance)
		 	}
		 	
		 	
		 })
		 .error(function (argument) {
		 	console.log(argument)
		 })
	/*$scope.aqi
	$scope.level
	$scope.healt_implication
	$scope.precaution
	$http.get('https://api.waqi.info/search/?token=e1653dca766998fa11828ac5d8380f3c4dcdc423&keyword=Valenciennes')

	.success(function(donnees) {
		$scope.aqi = Number(donnees.data[0].aqi)
		console.log($scope.aqi)

		if ($scope.aqi >= 0 || $scope.aqi <= 50){
			$scope.level = " Bien"
			$scope.healt_implication = "La qualité de l'air est jugée satisfaisante"+
			" et la pollution de l'air pose peu ou pas de risque"

			$scope.precaution= " aucune"
		} 
		if ($scope.aqi >= 51 || $scope.aqi <= 100){
			$scope.level = " Moderer"
			$scope.healt_implication = "La qualité de l'air est acceptable. Cependant, pour certains polluants, "+
			"un très petit nombre de personnes inhabituellement sensibles à la pollution atmosphérique peuvent "+
			"être préoccupantes pour la santé."
			$scope.precaution= " Les enfants et les adultes actifs, ainsi que les personnes souffrant de maladies respiratoires, "+
			"telles que l'asthme, devraient limiter les efforts prolongés en plein air."
		} 

		if ($scope.aqi >= 101 || $scope.aqi <= 150){
			$scope.level = " Malsain pour les personnes sensibles"
			$scope.healt_implication = "Les personnes sensibles peuvent avoir des effets sur la santé."
			$scope.precaution= " Les enfants et les adultes actifs, ainsi que les personnes souffrant de maladies respiratoires, "+
			"telles que l'asthme, devraient limiter les efforts prolongés en plein air."
		} 
		if ($scope.aqi >= 151 || $scope.aqi <= 200){
			$scope.level = " Malsain"
			$scope.healt_implication = "Tout le monde peut commencer à ressentir des effets sur la santé;"+
			" lespersones sensibles peuvent avoir des effets plus graves sur la santé"
			$scope.precaution= " Les enfants et les adultes actifs, ainsi que les personnes souffrant de maladies respiratoires,"+
			" telles que l'asthme, doivent éviter les efforts prolongés à l'extérieur tout le monde,"+
			" surtout les enfants, devrait limiter les efforts prolongés en plein air"
		}

		console.log($scope.aqi)
		console.log($scope.level)
		console.log($scope.healt_implication)
		console.log($scope.precaution)	 

	}).error(function(statut) {
		console.log(statut)
	});
*/

})







