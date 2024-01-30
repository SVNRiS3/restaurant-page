//parent element, element type, class name*, content*, src*
const renderEl = (
	parentEl,
	elementType,
	className = "",
	content = "",
	src = ""
) => {
	const newEl = document.createElement(elementType);
	if (className) newEl.classList.add(className);
	if (src) {
		newEl.src = src;
		newEl.alt = content;
	} else {
		newEl.innerHTML = content;
	}
	if (Array.isArray(parentEl))
		parentEl = document.querySelectorAll(parentEl[0])[
			parentEl[1] ? parentEl[1] : 0
		];
	parentEl.appendChild(newEl);
};

const renderPage = (elList, parentEl = "") => {
	for (let el of elList) {
		parentEl ? renderEl(parentEl, ...el) : renderEl(...el);
	}
};

export { renderPage };
