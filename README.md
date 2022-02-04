# jquery.anchorScroll

A lightweight jQuery plugin for smooth scrolling to anchor link targets and adding classes to elements on scroll events.

[View Demo](http://www.virgiliudiaconu.com/work/anchor-scroll/)

## Usage

### Initialization

Add `anchorScroll()` to the element selector of your choice:

```js
 $('.anchor-scroll').anchorScroll();
```

Example with all the available options and their default values:

```js
 $('.anchor-scroll').anchorScroll({
    scrollSpeed: 800, // scroll speed
    offsetTop: 0, // offset in pixels for fixed top navigation bars
    scrollStart: function () {
      // callback on scroll start
    },
    scrollEnd: function () {
      // callback on scroll end
    }
 });
```
### Data Attributes

- `data-class-to`: The element to which a class is added on scroll events. Include the dot(.) or hash(#) in the value. `data-class-to` is not required if you are adding the class to the anchor link's target. Set `this` as the value to add the class to the clicked anchor link itself.
- `data-scroll-start`: Class added when scrolling starts (the class is removed when scrolling ends).
- `data-scroll-end`: Class added when scrolling ends (the class is removed when scrolling starts again).
- `data-keep-start`: (boolean) Keep the class that is added when scrolling starts. The attribute does not require a value.
- `data-keep-end`: (boolean) Keep the class that is added when scrolling ends. The attribute does not require a value.

### HTML Examples

Adding data attributes to anchor links:

```html
<!-- Add class "collapse" to the anchor link's target (#div-1) after scrolling ends -->
<a class="anchor-scroll" href="#div-1" data-scroll-end="collapse"></a>

<!-- Add class "blur-effect" to the body on scroll -->
<a class="anchor-scroll" href="#div-2" class="anchor-scroll" data-scroll-start="blur-effect" data-class-to="body"></a>

<!-- Add class "seen" to the anchor link's target (#div-3) after scrolling ends and keep the class "seen" -->
<a class="anchor-scroll" href="#div-3" class="anchor-scroll" data-scroll-end="seen" data-keep-end></a>
```
