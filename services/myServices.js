angular.module('myServices', ['ngStorage'])
    .factory('registerService', function($localStorage) {

        var currency = ['USD', 'COL'];
        var inCurrency = 'COL';
        var inAccountsType = 'Savings account';
        var accountType = ['Checking account', 'Savings account'];
        
    
        
         return {
            currency: currency,
            inCurrency: inCurrency,
            accountType: accountType,
            inAccountsType : inAccountsType
            
        };
    })

.factory('movementsService', function($localStorage) {

        var moveDate = new Date();
        var inCurrency = 'COL';
        var inAccountsType = 'Savings account';
        var accountType = ['Checking account', 'Savings account'];
        
    
        
         return {
            moveDate: moveDate
            
        };



      

    })

    