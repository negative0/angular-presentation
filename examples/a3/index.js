angular.module('myApp', [])
	.controller('MyControl', function($http) {
		this.joke = "";
		var jokectr = this;
		this.Click = function(){
			$http({
	  				method: 'GET',
	  				url: "http://api.icndb.com/jokes/random"
			}).then(function successCallback(response) {
			    // this callback will be called asynchronously
			    // when the response is available
			    jokectr.joke = response.data.value.joke;
			    console.log(response);
			}, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.

			    console.log(response);

			});
	}
});