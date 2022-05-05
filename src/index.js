import { Input } from './js/Input.js';
import { Keyboard } from './js/Keyboard.js';

window.onload = () => {
	let main = document.createElement('main');
	main.className = 'wrapper';
	document.body.append(main);

	const input = new Input();
	input.render();

	const keyboard = new Keyboard();
	keyboard.render();

	document.addEventListener('keydown', (event) => {
		keyboard.keyPressListener(event);
	});

	document.addEventListener('keyup', (event) => {
		keyboard.keyPressListener(event);
	});

	document.querySelector('.keyboard').addEventListener('mousedown', (event) => {
		if (event.target.closest('.key')) {
			keyboard.keyClickHandler(event, event.target.closest('.key'));
		}
	})

	document.querySelector('.keyboard').addEventListener('mouseup', (event) => {
		if (event.target.closest('.key')) {
			keyboard.keyClickHandler(event, event.target.closest('.key'));
		}
	})
		
	
}