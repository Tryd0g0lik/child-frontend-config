
const { addLogin } = require('./functions/index');
const { fun } = require('./functions/forms/logins');

document.addEventListener('DOMContentLoaded', () => {
	const body = document.getElementsByTagName('body') as HTMLCollectionOf<HTMLElement>;
	console.log('mainb loadPage!!')
	fun.loadPage();
	// debugger;

	console.log('Страница загрузилась');

	(body[0].querySelector('.chattalks > div:last-of-type') as HTMLElement).setAttribute('style', "display:none;")
	addLogin(body);

});
