import { renderPage } from "./render-elements.js";

//parent element, element type, class name*, content*, src*
const elList = [];
const renderMainPage = (parentEl) => renderPage(elList, parentEl);

export { renderMainPage };