let pressed = false;

var div;
var WIDTH;
var HEIGHT;
var x;
var y;

const functions = {
	mouseup() {
		pressed = false;
	},
	mousedown() {
		div.addEventListener("mouseup", functions.mouseup);
		div.addEventListener("mouseleave", functions.mouseup);
	},
	click() {
		pressed = true;
		functions.mousedown();
	},
	move(e) {
		if (pressed) {
			const cX = e.offsetX;
			const cY = e.offsetY;

			const pX = (cX / HEIGHT) * 100;
			const pY = (cY / WIDTH) * 100;

			if (pY > 0.2 && pX > 0.2) {
				x.style.top = `${pY}%`;
				y.style.left = `${pX}%`;
			}
		}
	},
};

function init(width, height, xElement, yElement, divElement) {
	div = divElement;
	WIDTH = width;
	HEIGHT = height;
	x = xElement;
	y = yElement;

	div.addEventListener("mousedown", functions.click);
	div.addEventListener("mousemove", functions.move);
}

export default {
	init,
};
