import { renderPage } from "./render-elements.js";

//parent element, element type, class name*, content*, src*
const elList = [
	["h1", "main-header", "Contact"],
	["div", "contact"],
];

const contactList = [
	[[".contact"], "div", "contact-info-type", "Phone number: "],
	[[".contact-info-type", 0], "div", "phone-number", "123456789"],
	[[".contact"], "div", "contact-info-type", "Address: "],
	[
		[".contact-info-type", 1],
		"div",
		"address",
		"West Drive, Brooklyn, NY",
	],
];
const renderAboutPage = (parentEl) => {
	renderPage(elList, parentEl);
	renderPage(contactList);
};

export { renderAboutPage };
