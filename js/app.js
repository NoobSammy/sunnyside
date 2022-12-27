document.addEventListener("DOMContentLoaded", () => {
	const menuBtn = document.querySelector("#navbar-btn");
	const menu = document.querySelector("#navbar-list");

	menuBtn.addEventListener("click", () => {
		menu.classList.toggle("active");
	});
});
