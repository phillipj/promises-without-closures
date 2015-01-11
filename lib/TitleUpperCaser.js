var Promise = require('bluebird');
var request = require('request-promise');

function TitleUpperCaser (url) {
	this.url = url;
}

TitleUpperCaser.prototype.grabIt = function() {
	return new Promise.bind(this)
		.then(this._request)
		.then(this._findTitle)
		.then(this._uppercase)
		.then(this._prefixWithUrl);
};

TitleUpperCaser.prototype._request = function _request() {
	return request(this.url);
};

TitleUpperCaser.prototype._uppercase = function _uppercase(title) {
	return title[1].toUpperCase();
};

TitleUpperCaser.prototype._prefixWithUrl = function _prefixWithUrl(title) {
	return this.url + ' ' + title;
};

TitleUpperCaser.prototype._findTitle = function _findTitle(httpBody) {
	return httpBody.match(/<title>(.+)<\/title>/);
};

module.exports = TitleUpperCaser;