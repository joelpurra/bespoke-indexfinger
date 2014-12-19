/*global module:true, require:true */

"use strict";

var pluginName = "indexfinger",
    // Hack to get around having to write all browser code with require().
    browserGlobal = (function(f) {
        return f("return this")();
    }(Function)),
    convenient = ((browserGlobal.bespoke && browserGlobal.bespoke.plugins && browserGlobal.bespoke.plugins.convenient) || require("bespoke-convenient")),
    cv = convenient.builder(pluginName),

    plugin = function(options) {
        var decker = function(deck) {
            var cvBoundToDeck = cv.activateDeck(deck),

                off = {},

                activeSlide = null,

                activeSlideIndex = -1,

                unboundActiveSlideDeckMethods = {
                    // Plugin functions expect to be executed in a deck context
                    enableActiveSlideListener: function() {
                        off.saveActiveSlide = this.on("activate", unboundActiveSlideDeckMethods.saveActiveSlide.bind(this));
                    },

                    saveActiveSlide: function(e) {
                        activeSlide = e.slide;
                        activeSlideIndex = e.index;
                    },

                    getActiveSlide: function() {
                        return activeSlide;
                    },

                    getActiveSlideIndex: function() {
                        return activeSlideIndex;
                    }
                },

                registerDeckExtensions = function() {
                    deck.getActiveSlide = unboundActiveSlideDeckMethods.getActiveSlide.bind(deck);
                    deck.getActiveSlideIndex = unboundActiveSlideDeckMethods.getActiveSlideIndex.bind(deck);
                },

                enable = function() {
                    unboundActiveSlideDeckMethods.enableActiveSlideListener.call(deck);
                },

                init = function() {
                    registerDeckExtensions();
                    enable();
                };

            init();
        };

        return decker;
    };

module.exports = plugin;
