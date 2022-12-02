/**
 * lighty-slide.js
 *
 * Simple JS DOM element sliding library.
 * 
 * USA
 *
 * @see https://github.com/alexisphilip/lighty-slide
 * @author Alexis Philip (alexisphilip.fr)
 * @version 2.0
 */

/**
 * Returns a `transform()` CSS value from a given direction and value.
 * @param {string} direction Direction for CSS `translateY` or `translateY` functions.
 * - "top"
 * - "bottom"
 * - "left"
 * - "right"
 * @param {string} value `translate()` value. Ex: "50px"
 * @return A `transform()` CSS value.
 */
const getTransformValueFromDirection = (direction, value) => {
    if (direction === "top") return "translateY(" + value + ")";
    if (direction === "bottom") return "translateY(-" + value + ")";
    if (direction === "left") return "translateX(" + value + ")";
    if (direction === "right") return "translateX(-" + value + ")";
}

/**
 * LightySlide object with default values if not provided in the data attribute.
 * @var {object}
 */
const lightySlide = {
    slide: "40px",       // Slide distance in pixels, percentage...
    direction: "bottom", // Direction
    duration: 1000,      // Duration 
    opacity: 0,          // Starting opacity.
    timeout: 0,          // Timeout
};

window.onload = () => {

    const nodes = document.querySelectorAll(`[data-lighty-slide]`);

    for (const node of nodes) {

        // Raw animation data.
        // Array [ "slide:50px"; direction: "left"; "transition:2s" ]
        const animationDataRaw = node.dataset.lightySlide.split(";");

        // Formatted animation data.
        // Object { slide: "50px", direction: "left", transition: "1s" }
        const animationData = {};

        // Formats the data into an object.
        for (let declaration of animationDataRaw) {
            // Removes all whitespaces.
            declaration = declaration.replace(/\s+/g, '');
            // Splits into property and value.
            const propertyValue = declaration.split(":");
            animationData[propertyValue[0]] = propertyValue[1];
        }

        if (!animationData?.slide) animationData.slide = lightySlide.slide;
        if (!animationData?.direction) animationData.direction = lightySlide.direction;
        if (!animationData?.duration) animationData.duration = lightySlide.duration;
        if (!animationData?.opacity) animationData.opacity = lightySlide.opacity;
        if (!animationData?.timeout) {
            animationData.timeout = lightySlide.timeout;
        } else {
            node.style.opacity = 0;
        }

        const keyframe = [
            {
                transform: getTransformValueFromDirection(animationData.direction, animationData.slide),
                opacity: parseInt(animationData.opacity)
            }, {
                transform: "translateX(0px)",
                opacity: 1
            }
        ];

        const options = {
            duration: parseInt(animationData.duration),
            easing: 'ease-out'
        };

        // If there is a timeout, it will wait before animating. Otherwise, timeout is set to 0.
        setTimeout(() => {
            // Animates the element.
            node.animate(keyframe, options);
            // After the animation is done, sets the element's opacity back to 1.
            setTimeout(() => {
                node.style.opacity = "1";
            }, parseInt(animationData.timeout));
        }, parseInt(animationData.timeout));
    }
};
