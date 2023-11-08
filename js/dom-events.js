const activateDropdowns = (dropdownParents, handleDropdownClick) => {
	for (let dropdownParent of dropdownParents) {
		const dropdownToggle = dropdownParent.querySelector(".dropdown-toggle");
		const dropdownMenu = dropdownParent.querySelector(".dropdown-menu");
		const dropdownArrow = dropdownToggle.querySelector("img");
		dropdownToggle.addEventListener("click", (event) => {
			for (let dropdownParent of dropdownParents) {
				dropdownParent.classList.remove("open");
			}
			dropdownParent.classList.toggle("open");
		});
	}
	document.body.addEventListener("click", (event) => {
		console.log(event);
		if (event.target.closest(".dropdown-parent")) {
			return;
		}
		// if not, remove the class of open from all dropdown-parents
		for (let dropdownParent of dropdownParents) {
			dropdownParent.classList.remove("open");
		}
	});

	// document.body.removeEventListener("click", handleDropdownClick);
};

const handlePeriodKey = (e) => {
	console.log(e);
	if (e.key === ".") {
		alert("YOU DUN PRESSED DA PERIOD KEY!");
		document.body.removeEventListener("keydown", handlePeriodKey);
	}
};
// MAIN
(() => {
	// const dropdownParents = document.querySelectorAll(".dropdown-parent");
	// activateDropdowns(dropdownParents);
	const sayHelloBtns = document.querySelectorAll(".hello");
	for (let sayHelloBtn of sayHelloBtns) {
		sayHelloBtn.addEventListener("click", (event) => {
			// console.log(event);
			const name = event.target.getAttribute("data-name");
			alert(`Hello, ${name}!`);
		});
	}

	// keyboard event example
	document.body.addEventListener("keydown", handlePeriodKey);
})();