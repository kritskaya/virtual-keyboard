export default class Key {
  constructor(data) {
    this.name = data.name;

    if (localStorage.getItem('lang')) {
      this.value = data[`${localStorage.getItem('lang')}`];
    } else {
      this.value = data.en;
    }
    this.en = data.en;
    this.enShift = data.enshift;
    this.ru = data.ru;
    this.ruShift = data.rushift;
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

