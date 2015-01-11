# Promises without closures

Closures are often used when needed to pass state around. Sadly this decreases performance which is bad when performance really matters.

This is a small example of avoiding closures when writing promise based code. It uses [bluebird](https://github.com/petkaantonov/bluebird) and it's `Promise.bind()` utility function and is `prototype` based to keep state.

Its a very trivial example and of no real use. The interesting parts are [lib/TitleUpperCaser.js](./lib/TitleUpperCaser.js) with prototypes vs the closure version [lib/grabIt.js](lib/grabIt.js).
