/*!
 * jQuery.anchorScroll jQuery Plugin v1.2.0
 *
 * Author: Virgiliu Diaconu
 * http://www.virgiliudiaconu.com
 * Licensed under the MIT license.
 */
;(function($, window, document, undefined) {
  'use strict';
  $.anchorScroll = function(el, options) {
    var base = this;

    // Access to jQuery and DOM versions of element
    base.$el = $(el);
    base.el = el;

    // Cached objects
    base.$win = $(window);

    // Initialize
    base.init = function() {
      base.options = $.extend({}, $.anchorScroll.defaultOptions, options);
    };

    // On element click
    base.$el.click(function(e) {
      e.preventDefault();

      // Set variables
      var $anchorHash = $(base.el.hash),
        classTo = base.$el.data("classTo");

      // Check if the link has an anchor
      if ($anchorHash.length) {
        var targetPos = $anchorHash.offset().top - base.options.offsetTop,
          classTo = (classTo === "this") ? base.el : classTo,
          scrollStart = base.$el.data("scrollStart"),
          scrollEnd = base.$el.data("scrollEnd");

        // Callback scroll start
        if (typeof base.options.scrollStart === 'function') {
          base.options.scrollStart.call(el);
        }

        // Set the targeted element
        classTo = classTo ?? $anchorHash;

        // Add class to the selected or targeted element on scroll
        $(classTo).addClass(scrollStart);
        if (base.el.hasAttribute('data-keep-end') === false) {
          $(classTo).removeClass(scrollEnd);
        }

        // Smooth scroll to the target
        $('html,body').animate({
          scrollTop: targetPos
        }, base.options.scrollSpeed).promise().done(function() {
          // On animation complete
          $(classTo).addClass(scrollEnd)
          if (base.el.hasAttribute('data-keep-start') === false) {
            $(classTo).removeClass(scrollStart);
          }

          // Callback on scroll end
          if (typeof base.options.scrollEnd === 'function') {
            base.options.scrollEnd.call(el);
          }
        });
      }
    });

    // Run initializer
    base.init();
  };

  $.anchorScroll.defaultOptions = {
    scrollSpeed: 800,
    offsetTop: 0
  };

  $.fn.anchorScroll = function(options) {
    return this.each(function() {
      (new $.anchorScroll(this, options));
    });
  };

})(jQuery, window, document);
