/*!
 * anchorScroll v2
 *
 * Author: Virgiliu Diaconu
 * http://www.virgiliudiaconu.com
 * Licensed under the MIT license.
 */

class AnchorScroll {
  constructor(el, options = {}) {
      this.el = el;
      this.options = Object.assign({}, AnchorScroll.defaultOptions, options);
      this.init();
  }

  init() {
      this.el.addEventListener('click', (e) => {
          e.preventDefault();

          const anchorHash = document.querySelector(this.el.hash);
          let classTo = this.el.getAttribute("data-class-to");

          if (anchorHash) {
              const targetPos = anchorHash.getBoundingClientRect().top + window.scrollY - this.options.offsetTop;
              classTo = (classTo === "this") ? this.el : classTo;
              const scrollStart = this.el.getAttribute("data-scroll-start");
              const scrollEnd = this.el.getAttribute("data-scroll-end");

              if (typeof this.options.scrollStart === 'function') {
                  this.options.scrollStart.call(this.el);
              }

              const targetElement = classTo ? document.querySelector(classTo) : anchorHash;

              if (targetElement) {
                  targetElement.classList.add(scrollStart);
                  if (!this.el.hasAttribute('data-keep-end')) {
                      targetElement.classList.remove(scrollEnd);
                  }
              }

              window.scrollTo({
                  top: targetPos,
                  behavior: 'smooth'
              });

              // Since there's no native "scroll end" event, we'll use a setTimeout
              setTimeout(() => {
                  if (targetElement) {
                      targetElement.classList.add(scrollEnd);
                      if (!this.el.hasAttribute('data-keep-start')) {
                          targetElement.classList.remove(scrollStart);
                      }
                  }

                  if (typeof this.options.scrollEnd === 'function') {
                      this.options.scrollEnd.call(this.el);
                  }
              }, this.options.scrollSpeed);
          }
      });
  }
}

AnchorScroll.defaultOptions = {
  scrollSpeed: 800,
  offsetTop: 0
};

// Helper function to initialize on elements
function initAnchorScroll(elements, options) {
  elements.forEach(el => new AnchorScroll(el, options));
}

