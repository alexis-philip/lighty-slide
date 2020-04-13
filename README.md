# lighty-slide.js

`lighty-slide.js` is a plain JavaScript library allowing its user to easily add slide animations to DOM elements
from the HTML `data` attribute.

> Warning: all the comments in the source code are written in French, as I wrote this code a long time ago, not thinking
> it could be used by people throughout the world.

## Usage

It is very simple. Simply include `lighty-slide.js` or `lighty-slide.min.js` and add `lighty-slide` class
to the DOM element.

```html
<h1 class="lighty-slide">Header slidin'</h1>
```

Then, add parameters through the DOM element with `data-lighty_slide` data attribute.

```text
slide     - The slide's length.
direction - The slide's direction (top, right, left, bottom).
duration  - The slide's duration in seconds.
opacity   - The slide's opacity at the start of the animation (range: [0-1]).
```

Complete example:

```html
<h1
    class="lighty-slide"
    data-landjs="
        slide:100px;
        direction:bottom;
        duration:0.5s;
        opacity:0">
Header slidin'</h1>
```

Examples of usage shown in `demo/index.html`.

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/) - see the LICENSE.md file for details.

## Author

Alexis Philip ([Website](https://alexisphilip.fr),
[GitHub](https://github.com/alexis-philip),
[LinkedIn](https://www.linkedin.com/in/alexis-philip-019955176)). 