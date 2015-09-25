'use strict';



module.exports = [function() {

	var service = {};


	this.setPublicKey = function(key) {
		service.publicKey = key;

		return this;
	};

	this.setSignetUrl = function(url) {
		service.signetUrl = url;

		return this;
	};


	this.$get = ['$sce', function($sce) {

		service.buttonScriptUrl = $sce.trustAsResourceUrl(service.buttonScriptUrl);

		return service;
	}];

}];
