const soilTheme = (function () {
	const themeSwitcher = document.querySelector('#theme-switcher');
	const themeSwitcherInputs = document.querySelectorAll('#theme-switcher input');
	let savedTheme = localStorage.getItem('theme');

	function init() {
		themeSwitcher.addEventListener('change', (e) => changeTheme(e.target.value));

		if (savedTheme) {
			handleSavedTheme();
			return;
		}

		if (window?.matchMedia('(prefers-color-scheme: dark)').matches) changeTheme('dark');
		if (window?.matchMedia('(prefers-color-scheme: light)').matches) changeTheme('light');

		handleSavedTheme();
	}

	function changeTheme(themeName) {
		localStorage.setItem('theme', themeName);
		document.documentElement.classList = themeName;
		savedTheme = themeName;
	}

	function handleSavedTheme() {
		document.documentElement.classList = savedTheme;

		themeSwitcherInputs.forEach((input) => {
			input.removeAttribute('checked');

			if (input.value == savedTheme) input.checked = true;
		});
	}

	return { init };
})();

export { soilTheme };
