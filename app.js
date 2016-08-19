var app = angular.module('app', []);

app.controller('main', function($scope, $timeout){
	var counter = 0;
	$scope.score = 0;
	var colours = ['green','red', 'blue', 'yellow'];
	var store=[];
	var tempStore;
	var play=[];
	
	function flashLight(colour){
		$timeout.cancel(flash);
		if(colour == 'green'){
			$scope.green = {'background-color':'#66BB6A'};
			$timeout(function () {
				$scope.green = {'background-color':'#339966'};
			}, 500);
		}

		if(colour == 'red'){
			$scope.red = {'background-color':'red'};
			$timeout(function () {
				$scope.red = {'background-color':'#cc0000'};
			}, 500);
		}
		if(colour == 'blue'){
			$scope.blue = {'background-color':'#42A5F5'};
			$timeout(function () {
				$scope.blue = {'background-color':'#3366ff'};
			}, 500);
		}
		if(colour == 'yellow'){
			$scope.yellow = {'background-color':'#FDD835'};
			$timeout(function () {
				$scope.yellow = {'background-color':'#ff9933'};
			}, 500);
		}
		
	}
	
	function flash(){
		var i = 0, l = store.length;
		
		function flashEach() {
			
			flashLight(store[i]);
			
			if(++i < l){
				$timeout.cancel(flashEach);
				$timeout(flashEach, 1000);
				
			}
		}
		flashEach();
	}
	
	
	$scope.player = function(colour){
		flashLight(colour);
		if(tempStore && tempStore[0]==colour)
			tempStore.shift();
		else if(tempStore && tempStore[0]!=colour){
			$scope.score = 0;
		}
		if(tempStore && tempStore.length == 0){
			$scope.score++;
			$scope.start();
		}
		
		counter++;
	};
	
	$scope.start = function(){
		
		var random = Math.floor(Math.random() * (3 + 1));
		store.push(colours[random]);
		tempStore = store.slice();
		$timeout.cancel(flash);
		$timeout(flash, 1000);
	};
	
});