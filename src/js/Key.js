export class Key {
	constructor(data) {
		this.name = data.name;
		this.value = data.eng;
		this.en = data.eng;
		this.enShift = data.engshift;
		this.ru = data.rus;
		this.ruShift = data.rusValue;
	}

	down() {
		let key = document.querySelector('.' + this.name);
		key.classList.add('active');
	}

	up() {
		let key = document.querySelector('.' + this.name);
		key.classList.remove('active');
	}
}