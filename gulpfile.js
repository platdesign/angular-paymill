'use strict';

var gulp = require('gulp');



// Load js generator
var js = require('pd-gulp-js')(gulp);

js.register({
	options: {
		banner: {
			file: './banner.txt'
		}
	},
	module: {

		src: './src/Paymill.js',
		dest: './dest'
	},

	example: {
		src: './example/assets/js/*.js',
		dest: './example/public/js'
	}
});



