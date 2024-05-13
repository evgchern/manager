if(localStorage.getItem('theme') == null) {
	localStorage.setItem('theme', 'light');
}

function theme() {
	if(localStorage.getItem('theme') == 'light') {
		document.body.classList.remove('theme-dark');
	} else {
		document.body.classList.add('theme-dark');
	}
}
theme();

function theme_change() {
    if(localStorage.getItem('theme') == 'light') {
		localStorage.setItem('theme', 'dark');
	} else {
		localStorage.setItem('theme', 'light');
	}
    theme();
}