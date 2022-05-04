import { Keyboard } from './js/Keyboard.js';

window.onload = () => {
	let main = document.createElement('main');
	main.className = 'wrapper';
	document.body.append(main);

	const keyboard = new Keyboard();
	keyboard.render();

	document.addEventListener('keydown', (event) => {
		keyboard.keyPressListener(event);
	});

	document.addEventListener('keyup', (event) => {
		keyboard.keyPressListener(event);
	});
		
	
}