class Input {
  constructor() {
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
    this.inputDom.setSelectionRange(this.cursorPos, this.cursorPos);
    this.inputDom.focus();

    this.inputDom.setRangeText(value, this.cursorPos, this.cursorPos);
    this.cursorPos += value.length;

    this.inputDom.setSelectionRange(this.cursorPos, this.cursorPos);
    this.inputDom.focus();
  }

  clear(direction) {
    this.inputDom.setSelectionRange(this.cursorPos, this.cursorPos);
    this.inputDom.focus();

    if (direction === 'left' && this.cursorPos !== 0) {
      this.inputDom.setRangeText('', this.cursorPos - 1, this.cursorPos);
      this.cursorPos -= 1;
    }

    if (direction === 'right' && this.cursorPos !== this.inputDom.length - 1) {
      this.inputDom.setRangeText('', this.cursorPos, this.cursorPos + 1);
    }

    this.inputDom.setSelectionRange(this.cursorPos, this.cursorPos);
    this.inputDom.focus();
  }
}

export default Input;
