angular.module('myServices', [])

    .factory('registerService', function() {
        var ownerName = ['Luis Sandino Ruiz', 'Palito Ortega', 'Cristiano Ronaldo', 'Barack Obama'];
        var inCurrencyName = 'Luis Sandino Ruiz';
        var currency = ['USD', 'COL'];
        var inCurrency = 'COL';
        var inAccountsType = 'Savings account';
        var accountType = ['Checking account', 'Savings account'];
        
    
        
         return {
            currency: currency,
            inCurrency: inCurrency,
            accountType: accountType,
            inAccountsType : inAccountsType,
            ownerName : ownerName,
            inCurrencyName : inCurrencyName
            
        };
    })



    .factory('summaryService', function() {   
    
        
         return {   
        };
    })


    .factory('movementService', function() {
        
        var movementType = ['Credit', 'Debit'];
        var date = new Date();
       
    
        
         return {
            movementType: movementType,
            date : date
            
        };
    })

    .factory('getLocalStorage', function() {
        var movesList = {};

        return {
            list: movesList,
            updateMoves: function (movesArr) {
                if (window.localStorage && movesArr) {
                    localStorage.setItem("moves", angular.toJson(movesArr));
                }
                movesList = movesArr;
            },
            getMoves: function () {
               movesList = angular.fromJson( localStorage.getItem("moves") );
               return movesList ? movesList : [];
            }

            
        };
    })