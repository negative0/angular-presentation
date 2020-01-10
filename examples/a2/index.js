angular.module('myApp', [])
	.controller('MyControl', function() {
		this.name = "Hello";
		this.Click = function(){
			alert("Hello World");
		}

	});