const soilNav = (function () {
	const mainNav = document.querySelector('#main-nav');
	const menuToggler = document.querySelector('#menu-toggler');
	const themeSwitcher = document.querySelector('#theme-switcher');
	const themeToggler = document.querySelector('#theme-toggler');

	function init() {
		menuToggler.addEventListener('click', () => {
			mainNav.classList.toggle('main-nav--active');
			menuToggler.classList.toggle('menu-toggler--active');
			themeSwitcher.classList.remove('theme-switcher--active');
			themeToggler.classList.remove('theme-toggler--active');
		});

		themeToggler.addEventListener('click', () => {
			themeSwitcher.classList.toggle('theme-switcher--active');
			themeToggler.classList.toggle('theme-toggler--active');
			mainNav.classList.remove('main-nav--active');
			menuToggler.classList.remove('menu-toggler--active');
		});
	}

	return { init };
})();

export { soilNav };
