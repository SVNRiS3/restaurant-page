import logo from "./img/logo.png";
import { renderPage } from "./render-elements.js";
//parent element, element type, class name*, content, src*
const elList = [
	["h1", "main-header", "Welcome to the Haz Restaurant"],
	["img", "logo", "Haz restaurant logo", logo],
	[
		"p",
		"about-us",
		`<p>Welcome to Haz Restaurant, where culinary excellence meets unparalleled ambiance.</p>
		Nestled in the heart of New York, Haz Restaurant is a haven for food enthusiasts seeking an extraordinary dining experience.Step into a world where every dish tells a story, crafted with passion and precision by our master chefs.From the moment you enter, be prepared to embark on a gastronomic journey that tantalizes your taste buds and captivates your senses.Whether you're craving innovative fusion cuisine or classic favorites with a modern twist, Haz Restaurant promises to delight even the most discerning palates.
		<p>Join us and discover why Haz Restaurant is not just a restaurant but a destination for unforgettable culinary adventures.</p>`,
	],
];
const renderMainPage = (parentEl) => renderPage(elList, parentEl);

export { renderMainPage };
