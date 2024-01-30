import { renderPage } from "./render-elements.js";

//parent element, element type, class name*, content*, src*
const elList = [
	["h1", "main-header", "Menu"],
	["div", "menu-part"],
	["div", "menu-part"],
];

const sidesList = [
	[[".menu-part", 0], "h2", "menu-header", "Sides"],
	[[".menu-part", 0], "div", "menu-item", "Prawns"],
];
const renderMenuPage = (parentEl) => {
	renderPage(elList, parentEl);
	renderPage(sidesList);
};

export { renderMenuPage };
