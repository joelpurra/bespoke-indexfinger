[![Build Status](https://secure.travis-ci.org/joelpurra/bespoke-indexfinger.png?branch=master)](https://travis-ci.org/joelpurra/bespoke-indexfinger) [![Coverage Status](https://coveralls.io/repos/joelpurra/bespoke-indexfinger/badge.png)](https://coveralls.io/r/joelpurra/bespoke-indexfinger)

# bespoke-indexfinger

Keep track of the active slide in [Bespoke.js][bespoke.js]. This plugin is targeted towards plugin developers, not everyday bespoke users looking to make a nice presentation.

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/joelpurra/bespoke-indexfinger/master/dist/bespoke-indexfinger.min.js
[max]: https://raw.github.com/joelpurra/bespoke-indexfinger/master/dist/bespoke-indexfinger.js

## Usage

This plugin is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  indexfinger = require('bespoke-indexfinger');

bespoke.from('#presentation', [
  indexfinger()
]);
```

When using browser globals:

```js
bespoke.from('#presentation', [
  bespoke.plugins.indexfinger()
]);
```

In your plugin, you can easily check which slide is active.

```js
// Get the slide object, which is the slide DOM object/element
var activeSlide = deck.getActiveSlide();

// Get the index, which is the index in deck.slides
var activeSlideIndex = deck.getActiveSlideIndex();
```

## Package managers

### npm

```bash
$ npm install bespoke-indexfinger
```

### Bower

```bash
$ bower install bespoke-indexfinger
```


## Credits

[Mark Dalgleish](http://markdalgleish.com/) for [bespoke.js][bespoke.js] and related tools. This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

Siemar, [javiersierra on flickr](https://secure.flickr.com/photos/javiersierra/), for his photo [Marcapagina](https://secure.flickr.com/photos/javiersierra/4458644494/) ([CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)).

My best friend, [bespoke-convenient](https://github.com/joelpurra/bespoke-convenient), for continued support - rain and shine. I love you, man.


## License

Copyright (c) 2013, 2014 [Joel Purra](http://joelpurra.com/) All rights reserved.

When using bespoke-indexfinger, comply to the [MIT license](http://joelpurra.mit-license.org/2013-2014). Please see the LICENSE file for details, and the [MIT License on Wikipedia](http://en.wikipedia.org/wiki/MIT_License).

[bespoke.js]: https://github.com/markdalgleish/bespoke.js
