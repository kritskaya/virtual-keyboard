class Input {
  constructor() {
    this.text = '';
    this.inputDom = null;
    this.cursorPos = 0;
  }

  render() {
    const block = document.createElement('section');
    block.className = 'input-block';

    const textarea = document.createElement('textarea');
    textarea.classList = 'input';
    block.append(textarea);

    document.querySelector('main').append(block);

    this.inputDom = textarea;
  }

  type(value) {
    this.inputDom.focus();

    this.inputDom.setRangeText(value, this.cursorPos, this.cursorPos);
    this.cursorPos += 1;
  }
}

export default Input;