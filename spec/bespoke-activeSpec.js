/*global document:true, jasmine:true, bespoke:true, describe:true, it:true, expect:true, beforeEach:true */

(function(document, jasmine, bespoke, describe, it, expect, beforeEach, undefined) {
    "use strict";

    describe("bespoke-active", function() {

        var deck,

            createDeck = function() {
                var parent = document.createElement("article");
                for (var i = 0; i < 10; i++) {
                    parent.appendChild(document.createElement("section"));
                }

                deck = bespoke.from(parent, {
                    convenient: true,
                    active: true
                });
            };

        beforeEach(createDeck);

        describe("deck.getActiveSlide and deck.getActiveSlideIndex", function() {

            it("should handle slide 0", function() {
                expect(deck.getActiveSlide()).toBe(deck.slides[0]);
                expect(deck.getActiveSlideIndex()).toBe(0);
            });

            it("should handle slide 0 then next", function() {
                deck.slide(0);
                deck.next();
                expect(deck.getActiveSlide()).toBe(deck.slides[1]);
                expect(deck.getActiveSlideIndex()).toBe(1);
            });

            it("should handle slide 5", function() {
                deck.slide(5);
                expect(deck.getActiveSlide()).toBe(deck.slides[5]);
                expect(deck.getActiveSlideIndex()).toBe(5);
            });

            it("should handle slide 5 then prev", function() {
                deck.slide(5);
                deck.prev();
                expect(deck.getActiveSlide()).toBe(deck.slides[4]);
                expect(deck.getActiveSlideIndex()).toBe(4);
            });

            it("should handle slide 0 then prev", function() {
                deck.slide(0);
                deck.prev();
                expect(deck.getActiveSlide()).toBe(deck.slides[0]);
                expect(deck.getActiveSlideIndex()).toBe(0);
            });
        });
    });
}(document, jasmine, bespoke, describe, it, expect, beforeEach));
