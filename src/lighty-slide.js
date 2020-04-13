/**
 * lighty-slide.js
 *
 * Simple JS DOM element sliding library.
 *
 * @see https://github.com/alexis-philip/lighty-slide
 * @author Alexis Philip
 * @version 1.0
 */
window.onload = function() {
	var nodes = document.querySelectorAll(".lighty-slide");

	for (i = 0; i < nodes.length; i++) {

		var node = nodes[i];

		// Récupère la "string" de "data-lighty_slide".
		// Array [ "slide:50px"; direction: "left"; "transition:2s" ]
		var raw_data = node.dataset.lighty_slide.split(";");

		// Object { slide: "50px", direction: "left", transition: "1s" }
		var data = new Object();

		// Création de l'objet à partir de la string.
		for (x = 0; x < raw_data.length; x++) {
			
			var split = raw_data[x].split(":");

			var property = split[0];
			// Supprime les espaces dans "data-lighty_slide"
			if (property[0] == " ") {property = property.substring(1);}
			var value = split[1];

			data[property] = value;
		}

		function direction(direc, value) {
			if (direc === "top") return "translateY(" + value + ")";
			if (direc === "bottom") return "translateY(-" + value + ")";
			if (direc === "left") return "translateX(" + value + ")";
			if (direc === "right") return "translateX(-" + value + ")";
		}

		// Création de l'animation et timing.
		var keyframe = [
			{
				transform: direction(data.direction, data.slide),
				opacity: parseInt(data.opacity)
			}, {
				transform: "translateX(0px)",
				opacity: 1
			}
		];

		var options = {
			duration: parseFloat(data.duration.slice(0, -1)) * 1000,
			easing: 'ease-out'
		};

		// Ajout de l'animation
		node.animate(keyframe, options);
	}
};