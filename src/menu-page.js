import { renderPage } from "./render-elements.js";

//parent element, element type, class name*, content, src*
const elList = [["h1", "main-header", "Menu"]];
const renderMenuPage = (parentEl) => renderPage(parentEl, elList);

export { renderMenuPage };
