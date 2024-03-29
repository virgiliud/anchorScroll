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
                    if (scrollStart) {
                        const startClasses = scrollStart.split(' ');
                        startClasses.forEach(cls => targetElement.classList.add(cls));
                    }
                
                    if (!this.el.hasAttribute('data-keep-end') && scrollEnd) {
                        const endClasses = scrollEnd.split(' ');
                        endClasses.forEach(cls => targetElement.classList.remove(cls));
                    }
                }
  
                window.scrollTo({
                    top: targetPos,
                    behavior: 'smooth'
                });
  
                // Check when scrolling has stopped
                let lastScrollTop = -1;
                const checkScrollEnd = setInterval(() => {
                    if (lastScrollTop === window.scrollY) {
                        clearInterval(checkScrollEnd);
                        if (targetElement) {
                            // Split and add/remove scrollEnd classes if it's not null
                            if (scrollEnd) {
                                const endClasses = scrollEnd.split(' ');
                                endClasses.forEach(cls => targetElement.classList.add(cls));
                            }

                            if (!this.el.hasAttribute('data-keep-start') && scrollStart) {
                                // Split and add/remove scrollStart classes if it's not null
                                const startClasses = scrollStart.split(' ');
                                startClasses.forEach(cls => targetElement.classList.remove(cls));
                            }
                        }

                        if (typeof this.options.scrollEnd === 'function') {
                            this.options.scrollEnd.call(this.el);
                        }
                    } else {
                        lastScrollTop = window.scrollY;
                    }
                }, 100);
            }
        });
    }
  }
  
  AnchorScroll.defaultOptions = {
    offsetTop: 0
  };
  
  // Helper function to initialize on elements
  function initAnchorScroll(elements, options) {
    elements.forEach(el => new AnchorScroll(el, options));
  }
  