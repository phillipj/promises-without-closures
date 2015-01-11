var TitleUpperCaser = require('./lib/TitleUpperCaser');
var grabIt = require('./lib/grabIt');

new TitleUpperCaser('http://www.google.com/').grabIt().then(function onUpperCaseRes(title) {
	console.log('Title result from prototype version', title);
});

grabIt('http://www.google.com/').then(function onGrabResponse(title) {
	console.log('Title result from closure version', title);
});