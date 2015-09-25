'use strict';




var mod = angular.module('pd.paymill', []);


// PaymillProvider
mod.provider('Paymill', require('./providers/Paymill'));


// paymill-subscribe-button
mod.directive('paymillSubscribeButton', require('./directives/paymill-subscribe-button'));
