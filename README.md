# lighty-slide.js

`lighty-slide.js` is a JavaScript library to quickly add sliding transitions by simply adding  `data-lighty-slide` HTML attribute to an element.

## Simple example

1. Include `lighty-slide.js` or `lighty-slide.min.js`.
2. Add the `data-lighty-slide` data attribute to your elements.

```html
<h1 data-lighty-slide>Slidin' header</h1>
```

## Complete example

```html
<h1 data-lighty-slide="
    slide: 100px;
    direction: bottom;
    duration: 500;
    opacity: 0.5;
    timeout: 1000">
Slidin' header</h1>
```

Other examples shown in `demo/index.html`.

## Options

```text
slide     {string} The slide's distance                     (ex: "20px", "5%")
direction {string} The slide's direction                    (ex: "top", "right", "left", "bottom")
duration  {number} The slide's duration in milliseconds     (ex: 200, 1000)
opacity   {number} Opacity at the start of the slide        (range [0-1]).
timeout   {number} Timeout in milliseconds before the slide (ex: 200, 1000)
```

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/) - see the `LICENSE.md` file for details.

## Author

Alexis Philip ([Website](https://alexisphilip.fr),
[GitHub](https://github.com/alexisphilip),
[LinkedIn](https://www.linkedin.com/in/alexis-philip-019955176)).
