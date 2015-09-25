'use strict';

/**
 * Directive: paymillSubscribeButton
 */
module.exports = ['$compile', function($compile) {

	var bridgeLoaded = false;

	return {
		restrict: 'E',
		require: 'paymillSubscribeButton',
		scope: {
			config: '=',
			product: '=',
			onToken: '@'
		},
		compile: function(el, attr) {

			var template = require('./template.jade');
			var render = $compile(template);

			return function(scope, el, attr, ctrl) {

				if(!bridgeLoaded) {
					$('head').append($('<script>').attr('src', 'https://bridge.paymill.com/dss3'));
					bridgeLoaded = true;
				}

				var newEl = render(scope);

				el.replaceWith( newEl );

				newEl.bind('token', '#button', function(event, token) {
					scope.$apply(function() {
						scope.handleToken(token);
					});
				});

			}

		},
		controller: ['$scope', 'Paymill', function($scope, Paymill){
			var resultScope = $scope.$parent.$new();


			$scope.config.signetUrl = $scope.config.signetUrl || Paymill.signetUrl;

			$scope.paymill = Paymill;


			$scope.submit = function(event) {
				event.preventDefault();
			};

			$scope.handleToken = function(token) {
				resultScope.token = token;


				if($scope.onToken) {
					resultScope.$eval($scope.onToken);
				}

				if($scope.config.onToken) {
					$scope.config.onToken(token);
				}

			};

		}]
	}
}];
