# jquery.anchorScroll

A lightweight, easy-to-use jQuery plugin for smooth scrolling to anchor targets and adding classes to elements on scroll events.

[View Demo](http://www.virgiliudiaconu.com/work/anchor-scroll/)

## Usage

### Initialization & Settings

```js

 $('.anchor-scroll').anchorScroll({
    scrollSpeed: 800, // scroll speed
    offsetTop: 0, // offset for fixed top bars (defaults to 0)
    onScroll: function () { 
      // callback on scroll start
    },
    scrollEnd: function () { 
      // callback on scroll end
    }
 });
```
## Data Attributes Settings

Add data attributes to your anchor link. 

- `data-class-to`: Element to which a class is added on scroll events (enter `this` as the value to target the anchor link itself)
- `data-on-scroll`: Class added to the selected element while scrolling
- `data-scroll-end`: Class added to the selected element after scroll ends

### HTML Examples

Set up elements via data attributes:

```html
<!-- Add class "blur-effect" to body on scroll --> 
<a href="#div-1" class="anchor-scroll" data-class-to="body" data-on-scroll="blur-effect"></a>

<!-- Add class "bounce" to anchor target (#div-2) at end of scroll --> 
<a href="#div-2" class="anchor-scroll" data-class-to="#div-2" data-scroll-end="bounce"></a>
```


## License

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
