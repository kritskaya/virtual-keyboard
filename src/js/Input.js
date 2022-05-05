export class Input {
	constructor() {
		this.text = '';
	}

	render() {
		let block = document.createElement('section');
		block.className = 'input-block';

		let textarea = document.createElement('textarea');
		textarea.classList = 'input';
		block.append(textarea);
		
		document.querySelector('main').append(block);
	}
}