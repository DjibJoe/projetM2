var aqiAPP=angular.module("aqiAPP", []);



aqiAPP.controller('aqiCtrl',function function_name($scope,$http) {
	$scope.feature = {}

	$http.get('https://services8.arcgis.com/rxZzohbySMKHTNcy/arcgis/rest/services/ind_hdf_agglo/FeatureServer/0/query?where=UPPER(lib_zone)%20like%20%27%25VALENCIENNES%25%27&outFields=date_echeance,valeur,qualificatif,source,code_zone,lib_zone&outSR=4326&f=json')
		 .success(function (reponses) {
		 	
		 	var taille = reponses.features.length-2
		 	$scope.feature = reponses.features[taille].attributes
		 	console.log($scope.feature)
		 })
		 .error(function (argument) {
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







