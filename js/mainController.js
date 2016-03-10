angular.module('miBank')

.controller('RegisterController', ['$scope','registerService', '$localStorage',  function( $scope, registerService, $localStorage) {
	$scope.inCurrency= registerService.inCurrency;
	$scope.currencies = registerService.currency; 
	$scope.accountsType = registerService.accountType; 
	$scope.inAccountType = registerService.inAccountsType;
	$scope.theAccount = registerService.store;
	
    

          
}])
.controller('MovementsController', ['$scope', 'movementsService','$localStorage', function ($scope, movementsService, $localStorage) {
	$scope.movementDate= movementsService.moveDate;
	/*$scope.currencies = registerService.currency; 
	$scope.accountsType = registerService.accountType; 
	$scope.inAccountType = registerService.inAccountsType;
	$scope.theAccount = registerService.store;*/
}])
.controller('SummaryController', ['$scope','movementsService', function ($scope, movementsService) {

}])
.controller('DetailController', ['$scope', function ($scope) {

}])
.controller('EditController', ['$scope', function ($scope) {

}])