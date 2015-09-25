/* angular-paymill
 *
 * @author	Christian Blaschke <mail@platdesign.de>
 * @version 0.0.0
 * @date		2015-09-25 05:25:44
 * @license MIT - http://opensource.org/licenses/mit-license.php
 *
 */
!function n(o,e,t){function r(i,a){if(!e[i]){if(!o[i]){var c="function"==typeof require&&require;if(!a&&c)return c(i,!0);if(u)return u(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var f=e[i]={exports:{}};o[i][0].call(f.exports,function(n){var e=o[i][1][n];return r(e?e:n)},f,f.exports,n,o,e,t)}return e[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)r(t[i]);return r}({1:[function(){"use strict";var n=angular.module("app",["pd.paymill"]);n.config(["PaymillProvider",function(n){n.setPublicKey("517113797587d2ba3ee19bd646ffb7f1").setSignetUrl("http://www.bodyclub24.de/wp-content/uploads/2015/09/bodyclub24-logo-4-2.png")}]),n.run(["$rootScope",function(n){n.config={buttonLabel:"Abo jetzt!",modalTitle:"Abo",submitButtonLabel:"2.50 EUR/Monat",product:{description:"Ein Jahr On-Demand",amount:250,currency:"EUR"},lang:"de-DE",onToken:function(n){console.log(n)}},n.handleToken=function(n){console.log(n)}}]),$(document).ready(function(){angular.bootstrap($("body"),[n.name])})},{}]},{},[1]);