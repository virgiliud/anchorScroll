# anchorScroll.js

A lightweight JavaScript utility for smooth scrolling to anchor link targets while adding custom classes to elements and invoking callbacks.

[View Demo](http://www.virgiliudiaconu.com/work/anchor-scroll/)

## Usage

### Initialization

Initialize the functionality on elements with the class `.anchor-scroll`:

```js
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.anchor-scroll');
    
    elements.forEach(el => {
        new AnchorScroll(el, {
            scrollSpeed: 800, // scroll speed
            offsetTop: 0, // offset for fixed top navigation bars
            scrollStart: function() {
                console.log('scroll start');
            },
            scrollEnd: function() {
                console.log('scroll end');
            }
        });
    });
});
```

### Data Attributes

- `data-class-to`: (string) The element to which a class is added on scroll events. Include the dot(.) or hash(#) in the value. `data-class-to` is not required if you are adding the class to the anchor link's target. Set `this` as the value to add the class to the clicked anchor link itself.
- `data-scroll-start`: (string) Class name added when scrolling starts (the class is removed when scrolling ends).
- `data-scroll-end`: (string) Class name added when scrolling ends (the class is removed when scrolling starts again).
- `data-keep-start`: (boolean) Keep the class that is added when scrolling starts. The attribute does not require a value.
- `data-keep-end`: (boolean) Keep the class that is added when scrolling ends. The attribute does not require a value.

### HTML Examples

Adding data attributes to anchor links:

```html
<!-- Add class "collapse" to the anchor link's target (#div-1) after scrolling ends -->
<a class="anchor-scroll" href="#div-1" data-scroll-end="collapse"></a>

<!-- Add class "blur-effect" to the body on scroll -->
<a class="anchor-scroll" href="#div-2" data-scroll-start="blur-effect" data-class-to="body"></a>

<!-- Add class "seen" to the anchor link's target (#div-3) after scrolling ends and keep the class -->
<a class="anchor-scroll" href="#div-3" data-scroll-end="seen" data-keep-end></a>
```