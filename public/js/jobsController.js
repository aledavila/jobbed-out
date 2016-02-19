(function() {

	var app = angular.module('JobbedOut');

	app.controller('JobsController', function($http) {
		// this.title = "Junior Developer";
		// this.company = "General Assembly";
		// this.createdAt = "10:35am Friday, February 19th";
		// return this;

		var self = this;

		$http({
			method: 'GET',
			url: '/api/v1/jobs'
		})
		.then(function success(response) {
			console.log('success', response.data.docs);
		});
	});

}());