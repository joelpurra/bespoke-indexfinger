[![Build Status](https://secure.travis-ci.org/joelpurra/bespoke-active.png?branch=master)](https://travis-ci.org/joelpurra/bespoke-active)

# bespoke-active

Keep track of the active slide in [Bespoke.js](http://markdalgleish.com/projects/bespoke.js)

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/joelpurra/bespoke-active/master/dist/bespoke-active.min.js
[max]: https://raw.github.com/joelpurra/bespoke-active/master/dist/bespoke-active.js

## Usage

First, include both `bespoke.js` and `bespoke-active.js` in your page.

Then, simply include the plugin when instantiating your presentation.

```js
bespoke.horizontal.from('article', {
  active: true
});
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
require('bespoke-active');
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
