if (document.documentElement.clientWidth <= 1024) {
	let iconMenu = document.querySelector('.header__menu-icon'),
	menuBody = document.querySelector('.header__menu-body'),
	welcomeTitle = document.querySelector('.welcome__title-wrapper'),
	menuLink = document.querySelectorAll('.header__menu-link'),
	body = document.querySelector('body');

	iconMenu.onclick = function() {
		iconMenu.classList.toggle('_menu-active');
		menuBody.classList.toggle('_menu-active');
		welcomeTitle.classList.toggle('_menu-active')
		body.classList.toggle('_lock');
	}

	menuLink.forEach(function(item) {
		item.addEventListener("click", function() {
			iconMenu.classList.toggle('_menu-active');
			menuBody.classList.toggle('_menu-active');
			welcomeTitle.classList.toggle('_menu-active')
			body.classList.toggle('_lock');
		})
	});
}

