const renderEl = (
	parentEl,
	elementType,
	className,
	content,
	src = ""
) => {
	const newEl = document.createElement(elementType);
	newEl.classList.add(className);
	if (src) {
		newEl.src = src;
		newEl.alt = content;
	} else {
		newEl.innerHTML = content;
	}

	parentEl.appendChild(newEl);
};

const renderPage = (parentEl, elList) => {
	for (let el of elList) {
		renderEl(parentEl, ...el);
	}
};

export { renderPage };
