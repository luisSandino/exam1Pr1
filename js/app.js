angular.module('miBank', ['ngStorage','ngRoute','myServices'] )


.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	
	.when('/', {
	    templateUrl: 'views/register.html',
	    controller: 'RegisterController'
	    
	})

	.when('/summary', {
	    templateUrl: 'views/summary.html',
	    controller: 'SummaryController'
	})
	
	.when('/movements', {
	    templateUrl: 'views/movements.html',
	    controller: 'MovementsController'
	})
	.when('/detail', {
	    templateUrl: 'views/detail.html',
	    controller: 'DetailController'
	})
	.when('/edit', {
	    templateUrl: 'views/edit.html',
	    controller: 'EditController'
	})
	.otherwise({
	  	redirectTo: '/'
	});

}]);

