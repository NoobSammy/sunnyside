document.addEventListener("DOMContentLoaded", () => {
	const menuBtn = document.querySelector("#navbar-btn");
	const menu = document.querySelector("#navbar-list");

	menuBtn.addEventListener("click", () => {
		menu.classList.toggle("active");
	});

	const footerSocial = document.querySelector(".footer__social");
	const images = footerSocial.querySelectorAll(".footer__icon img");
	const resetImages = () =>
		images.forEach((img) => (img.src = img.src.replace("-white", "")));

	footerSocial.addEventListener("mouseover", (e) => {
		if (e.target.matches(".footer__icon img")) {
			resetImages();
			const icon = e.target.dataset.icon;
			e.target.src = `images/icon-${icon}-white.svg`;
		}
	});
	footerSocial.addEventListener("mouseleave", (e) => resetImages());
});
