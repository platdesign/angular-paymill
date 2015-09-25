#angular-paymill

**IMPORTANT:** This is **not** an official project by [Paymill](https://paymill.com/)!

 

## Install

`npm install --save-dev angular-paymill`


## Usage

Embed the module in your html.

```html
<script src="/node_modules/angular-paymill/dest/Paymill.js"></script>
```


Set the module as dependency to your angular application.

```javascript

var app = angular.module('app', ['pd.paymill']);

```


### PaymillProvider

```javascript
app.config(['PaymillProvider', function(PaymillProvider) {

	PaymillProvider
		.setPublicKey('517113797587d2ba3ee19bd646ffb7f1')
		.setSignetUrl('http://lorempixel.com/400/200/sports/')

}]);
```




### paymill-subscribe-button

The controller part ...

```javascript
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
	
	// Alternatively to config.onToken you can set an on-token attribute
	$rootScope.handleToken = function(token) {
		console.log(token);
	};


}]);
```


And the view part ...

```html
<paymill-subscribe-button on-token="handleToken(token)" config="config"></paymill-subscribe-button>
```




#Author

Christian Blaschke <mail@platdesign.de>
