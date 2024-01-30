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
	[[".menu-item", 0], "div", "menu-item-price", "$9.90"],
	[[".menu-part", 0], "div", "menu-item", "Onion Rings"],
	[[".menu-item", 1], "div", "menu-item-price", "$5.90"],
	[[".menu-part", 0], "div", "menu-item", "Chips"],
	[[".menu-item", 2], "div", "menu-item-price", "$3.90"],
	[[".menu-part", 1], "h2", "menu-header", "Main Dish"],
	[[".menu-part", 1], "div", "menu-item", "Beef"],
	[[".menu-item", 3], "div", "menu-item-price", "$15.90"],
	[[".menu-part", 1], "div", "menu-item", "Curry"],
	[[".menu-item", 4], "div", "menu-item-price", "$23.90"],
	[[".menu-part", 1], "div", "menu-item", "Chicken"],
	[[".menu-item", 5], "div", "menu-item-price", "$13.90"],
];
const renderMenuPage = (parentEl) => {
	renderPage(elList, parentEl);
	renderPage(sidesList);
};

export { renderMenuPage };
