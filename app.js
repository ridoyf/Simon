var app = angular.module('app', []);

app.controller('main', function($scope, $timeout){

		$scope.playAudio = function(colour) {
			var audio;
			switch(colour){
					
				case "green":
					audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
					break;
				case "red":
					audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
					break;
				case "blue":
					audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
					break;
				case "yellow":
					audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
					break;
			}
			audio.play();
		};
});