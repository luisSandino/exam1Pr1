angular.module('miBank')

.controller('RegisterController', ['$scope', 'registerService', 'movementService','$localStorage','getLocalStorage','summaryService', function($scope, registerService, movementService, $localStorage, getLocalStorage,summaryService) {
	$scope.name = registerService.ownerName;
	$scope.currentName = registerService.inCurrencyName;
	$scope.inCurrency= registerService.inCurrency;
	$scope.currencies = registerService.currency; 
	$scope.accountsType = registerService.accountType; 
	$scope.inAccountType = registerService.inAccountsType;
	$scope.date = movementService.currentDate;
	$scope.movements = getLocalStorage.getMoves();

	$scope.addUser = function() {
		$scope.name = document.getElementById('name').value;
	}

	
          
}])
.controller('MovementsController', ['$scope', 'registerService', 'movementService','$localStorage','getLocalStorage','summaryService', function ($scope,registerService, movementService, $localStorage, getLocalStorage,summaryService) {
	$scope.movementType = movementService.movementType;
	$scope.date = movementService.currentDate;

	$scope.movements = getLocalStorage.getMoves();

	$scope.addMovement = function() {
	    $scope.movements.push({ 'date': $scope.newDate, 'movementType': $scope.newType, 'amount' : $scope.newAmount, 'description': $scope.newDescription});
	    getLocalStorage.updateMoves($scope.movements);
	    $scope.newDate = '';
	    $scope.newAmount = '';
	    $scope.newDescription = '';
     	$scope.newType = '';
     	
     	
     	
	};
  	
	

	
}])




.controller('SummaryController', ['$scope', 'registerService', 'movementService','$localStorage','getLocalStorage','summaryService', function ($scope, registerService,movementService, $localStorage, getLocalStorage,summaryService) {
	$scope.name = registerService.ownerName;
	$scope.date = movementService.currentDate;
	$scope.movements = getLocalStorage.getMoves();
	$scope.accountsType = registerService.accountType;

	$scope.addUser = function() {
		$scope.name = document.getElementById('name').value;
	}
$scope.removeItem = function() {
    $scope.movements.splice($scope.toRemove,1 );
    
};
	


}])
.controller('DetailController', ['$scope', 'registerService', 'movementService','$localStorage','getLocalStorage','summaryService', function ($scope, registerService,movementService, $localStorage, getLocalStorage,summaryService) {
	


}])
.controller('EditController', ['$scope', function ($scope) {

}])