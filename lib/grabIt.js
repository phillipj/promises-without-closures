var Promise = require('bluebird');
var request = require('request-promise');

function grabIt (url) {
	return request(url)
		.then(findTitle)
		.then(uppercase)
		.then(prefixWithUrl(url));
}

function uppercase(title) {
	return title[1].toUpperCase();
}

function prefixWithUrl(url) {
	return function(title) {
		return url + ' ' + title;
	};
}

function findTitle(httpBody) {
	return httpBody.match(/<title>(.+)<\/title>/);
}

module.exports = grabIt;