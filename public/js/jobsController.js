(function() {

	var app = angular.module('JobbedOut');

	app.controller('JobsController', function() {
		this.title = "Junior Developer";
		this.company = "General Assembly";
		this.createdAt = "10:35am Friday, February 19th";
		return this;
	});

}());