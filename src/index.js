import { renderMainPage } from "./main-page";
import { renderMenuPage } from "./menu-page";
import { renderAboutPage } from "./about-page";

const buttons = document.querySelector("nav");
const parentEl = document.querySelector("#content");
buttons.addEventListener("click", (button) => {
	let buttonText = button.target.textContent;
	if (buttonText) {
		parentEl.innerHTML = "";
		switch (buttonText) {
			case "Home":
				renderMainPage(parentEl);
				break;
			case "Menu":
				renderMenuPage(parentEl);
				break;
			case "About":
				renderAboutPage(parentEl);
				break;
		}
	}
});
// renderMainPage();
