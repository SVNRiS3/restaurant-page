import { renderPage } from "./render-elements.js";

const elList = [];
const renderMainPage = (parentEl) => renderPage(parentEl, elList);

export { renderMainPage };
