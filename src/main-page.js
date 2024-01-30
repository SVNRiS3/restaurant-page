import logo from "./img/logo.png";
import { renderPage } from "./render-elements.js";

const elList = [
	["h1", "welcome", "Welcome to the Restaurant"],
	["img", "logo", "hazbin restaurant logo", logo],
	[
		"p",
		"about-us",
		`<p>Welcome to Hazbin, where culinary excellence meets unparalleled ambiance.</p>
		Nestled in the heart of New York, Hazbin is a haven for food enthusiasts seeking an extraordinary dining experience.Step into a world where every dish tells a story, crafted with passion and precision by our master chefs.From the moment you enter, be prepared to embark on a gastronomic journey that tantalizes your taste buds and captivates your senses.Whether you're craving innovative fusion cuisine or classic favorites with a modern twist, Hazbin promises to delight even the most discerning palates.
		<p>Join us and discover why Hazbin is not just a restaurant but a destination for unforgettable culinary adventures.</p>`,
	],
];
const renderMainPage = (parentEl) => renderPage(parentEl, elList);

export { renderMainPage };
