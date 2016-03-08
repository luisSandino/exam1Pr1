angular.module('', ['ngStorage','ngRoute'] )


.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	
	.when('/', {
	    templateUrl: 'views/xxx.html',
	    controller: 'xxxxxController'
	})

	.when('/xxxxx', {
	    templateUrl: 'views/xxxx.html',
	    controller: 'xxxxxController'
	})
	
	.when('/records', {
	    templateUrl: 'views/xxxx.html',
	    controller: 'xxxxxController'
	})
	
	.otherwise({
	  	redirectTo: '/'
	});

	
}]);

