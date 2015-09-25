'use strict';


var app = angular.module('app', ['pd.paymill']);



app.config(['PaymillProvider', function(PaymillProvider) {

	PaymillProvider
		.setPublicKey('517113797587d2ba3ee19bd646ffb7f1')
		.setSignetUrl('http://lorempixel.com/400/200/sports/')

}]);





app.run(['$rootScope', function($rootScope) {


	$rootScope.config = {
		buttonLabel: 'Abo jetzt!',
		modalTitle: 'Abo',
		submitButtonLabel: '2.50 EUR/Monat',
		product: {
			description: 'Ein Jahr On-Demand',
			amount: 250,
			currency: 'EUR',

		},
		lang: 'de-DE',
		onToken: function(token) {
			console.log(token);
		}
	};



	$rootScope.handleToken = function(token) {
		console.log(token);
	};


}]);



$(document).ready(function() {
	angular.bootstrap($('body'), [app.name]);
})


