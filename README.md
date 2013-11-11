[![Build Status](https://secure.travis-ci.org/joelpurra/bespoke-active.png?branch=master)](https://travis-ci.org/joelpurra/bespoke-active)

# bespoke-active

Keep track of the active slide in [Bespoke.js][bespoke.js]. This plugin is targeted towards plugin developers, not everyday bespoke users looking to make a nice presentation.

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/joelpurra/bespoke-active/master/dist/bespoke-active.min.js
[max]: https://raw.github.com/joelpurra/bespoke-active/master/dist/bespoke-active.js

## Usage

First, include `bespoke.js`, `bespoke-convenient.js` and `bespoke-jumpy.js` in your page.

Then, simply include the plugin when instantiating your presentation - and make sure to insert `convenient: true` and `active: true` before any other plugin that might use active.


```js
bespoke.horizontal.from('article', {
  convenient: true,
  active: true
});
```

In your plugin, you can easily check which slide is active.

```js
// Get the slide object, which is the slide DOM object/element
var activeSlide = deck.getActiveSlide();

// Get the index, which is the index in deck.slides
var activeSlideIndex = deck.getActiveSlideIndex();
```

## Package managers

### Bower

```bash
$ bower install bespoke-active
```

### npm

```bash
$ npm install bespoke-active
```

The bespoke-active npm package is designed for use with [browserify](http://browserify.org/), e.g.

```js
require('bespoke');
require('bespoke-convenient');
require('bespoke-active');
```


## Credits

[Mark Dalgleish](http://markdalgleish.com/) for [bespoke.js][bespoke.js] and related tools. This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

My best friend, [bespoke-convenient](https://github.com/joelpurra/bespoke-convenient), for continued support - rain and shine. I love you, man.


## License

Copyright (c) 2013, [Joel Purra](http://joelpurra.com/) All rights reserved.

When using bespoke-active, comply to the [MIT license](http://joelpurra.mit-license.org/2013). Please see the LICENSE file for details, and the [MIT License on Wikipedia](http://en.wikipedia.org/wiki/MIT_License).

[bespoke.js]: https://github.com/markdalgleish/bespoke.js
