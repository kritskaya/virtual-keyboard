import {keys as keysData} from './keys.js';
import {Key} from './Key.js';

export class Keyboard {
	constructor() {
		this.keys = [];
		this.currentLang = 'en';
		this.generateKeys();
	}

	generateKeys() {
		if (keysData) {
			for(let i = 1; i <= 5; i++) {
				let keysRow = []; 
				keysData
					.filter(item => item.row === i)
					.forEach(item => keysRow.push(new Key(item)));
				this.keys.push(keysRow);
			}
		}
	}

	render() {
		
		let keyboard = document.createElement('section');
		keyboard.className = 'keyboard';

		let container = document.createElement('div');
		container.className = 'keyboard-container';

		for(let i = 0; i < 5; i++) {
			let row = document.createElement('div');
			row.className = 'keyboard__row row';

			this.keys[i].forEach((key) => {
				let keyElem = document.createElement('div');
				keyElem.className = 'keyboard__key key';
				keyElem.classList.add(key.name);

				let value = document.createElement('span');
				value.textContent = key.value;

				keyElem.append(value);
				row.append(keyElem);
			});

			container.append(row);
		}

		keyboard.append(container);
		document.querySelector("main").append(keyboard);
	}

	changeLanguage() {

	}

	tabKeyHandler(event) {
		event.preventDefault();
		let tab = this.keys.flat().find(key => key.name === 'key-func-tab');
		this.keyAction(event, tab)
	}

	ctrlKeyHandler(event) {
		event.preventDefault();
		
		let ctrl;
		if (event.code === 'ControlRight') {
			ctrl = this.keys.flat().find(key => key.name === 'key-func-right-ctrl');
		} else {
			ctrl = this.keys.flat().find(key => key.name === 'key-func-left-ctrl');
		}
		
		this.keyAction(event, ctrl);
	}

	shiftKeyHandler(event) {
		event.preventDefault();

		let shift;
		if (event.code === 'ShiftRight') {
			shift = this.keys.flat().find(key => key.name === 'key-func-right-shift');
		} else {
			shift = this.keys.flat().find(key => key.name === 'key-func-left-shift');
		}

		this.keyAction(event, shift);
	}

	altKeyHandler(event) {
		event.preventDefault();

		let alt;
		if (event.code === 'AltRight') {
			alt = this.keys.flat().find(key => key.name === 'key-func-right-alt');
		} else {
			alt = this.keys.flat().find(key => key.name === 'key-func-left-alt');
		}

		this.keyAction(event, alt);
	}

	capsKeyHandler(event) {
		event.preventDefault();
		let caps = this.keys.flat().find(key => key.name === 'key-func-capslock');
		this.keyAction(event, caps);
	}

	delKeyHandler(event) {
		event.preventDefault();
		let caps = this.keys.flat().find(key => key.name === 'key-func-del');
		this.keyAction(event, caps);
	}

	backspaceKeyHandler(event) {
		event.preventDefault();
		let backSpace = this.keys.flat().find(key => key.name === 'key-func-backspace');
		this.keyAction(event, backSpace);
	}

	winKeyHandler(event) {
		event.preventDefault();
		let win = this.keys.flat().find(key => key.name === 'key-func-win');
		this.keyAction(event, win);
	}

	arrowKeyHandler(event) {
		event.preventDefault();
		let arrow = this.keys.flat().find(key => key.name === 'key-func-'+ event.key.slice(5).toLowerCase());
		this.keyAction(event, arrow);
	}

	enterKeyHandler(event) {
		event.preventDefault();
		let enter = this.keys.flat().find(key => key.name === 'key-func-enter');
		this.keyAction(event, enter);
	}

	keyPressListener(event) {
		event.preventDefault();
		let eventKey = event.key;

		switch (eventKey) {
			case 'Tab': 
				this.tabKeyHandler(event);
				break;
			case 'Control' :
				this.ctrlKeyHandler(event);
				break;
			case 'Shift' :
				this.shiftKeyHandler(event);
				break;
			case 'Alt' :
				this.altKeyHandler(event);
				break;
			case 'AltGraph':
				this.altKeyHandler(event);
				break;
			case 'CapsLock':
				this.capsKeyHandler(event);
				break;
			case 'Delete':
				this.delKeyHandler(event);
				break;
			case 'Backspace':
				this.backspaceKeyHandler(event);
				break;
			case 'Meta':
				this.winKeyHandler(event);
				break;
			case 'ArrowLeft':
				this.arrowKeyHandler(event);
				break;
			case 'ArrowRight':
				this.arrowKeyHandler(event);
				break;
			case 'ArrowUp':
				this.arrowKeyHandler(event);
				break;
			case 'ArrowDown':
				this.arrowKeyHandler(event);
				break;
			case 'Enter':
				this.enterKeyHandler(event);
				break;
			default:
				for (let i = 0; i < 5; i++) {
					let pressed = this.keys[i].find(key => key.en === eventKey ||
						key.enShift === eventKey ||
						key.ru === eventKey ||
						key.ruShift === eventKey);
					if (pressed) {
						this.keyAction(event, pressed);
						break;
					}
				}
		}
	}

	keyAction(event, key) {
		if (event.type == 'keydown')
			key.down();
		if (event.type == 'keyup')
			key.up();
	}

	
}