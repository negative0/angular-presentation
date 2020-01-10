angular.module('myApp', [])
	.controller('MyControl', function($http) {
		this.jokes = [];
		var jokectr = this;
		this.Click = function(){
			$http({
	  				method: 'GET',
	  				url: "http://api.icndb.com/jokes/random/3"
			}).then(function successCallback(response) {
			    // this callback will be called asynchronously
			    // when the response is available
			    jokectr.jokes = response.data.value;
			    console.log(response);
			}, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.

			    console.log(response);

			});
	}
});