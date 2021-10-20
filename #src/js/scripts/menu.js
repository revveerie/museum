let iconMenu = document.querySelector('.header__menu-icon'),
	menuBody = document.querySelector('.header__menu-body'),
	body = document.querySelector('body');

iconMenu.onclick = function() {
	iconMenu.classList.toggle('_menu-active');
	menuBody.classList.toggle('_menu-active');
	body.classList.toggle('_lock');
}