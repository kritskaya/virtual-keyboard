export default class Key {
  constructor(data) {
    this.name = data.name;
    this.value = data.eng;
    this.en = data.eng;
    this.enShift = data.engshift;
    this.ru = data.rus;
    this.ruShift = data.russhift;
  }

  render() {
    const key = document.createElement('div');
    key.className = 'keyboard__key key';
    key.classList.add(this.name);

    const value = document.createElement('span');
    value.textContent = this.value;

    key.append(value);
    return key;
  }
}

