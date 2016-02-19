(function() {

	var app = angular.module('JobbedOut');

	app.controller('JobsController', function($http) {
		
		// set a variable to this in order to maintain scope
		var self = this;

		// use $http to get request on our servers job api to retrieve jobs
		$http({
			method: 'GET',
			url: '/api/v1/jobs'
		})
		.then(function success(response) {
			self.jobs = response.data.docs;
		});

		this.currentPage = 1;
		this.pageCount = 3;

		this.nextPage = function() {
			if (this.currentPage < this.pageCount) {
				this.currentPage++;
				$http({
					method: 'GET',
					url: '/api/v1/jobs?page=' + this.currentPage
				})
				.then(function success(response) {
					self.jobs = response.data.docs;
				});
			} else if (this.currentPage === this.pageCount) {
				this.currentPage = 1;
			};
		};

		// $('#load-more').on('click', function() {
		// 	// make an http request to load additional pages of jobs
		// })


	});

}());