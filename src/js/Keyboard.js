import keysData from './keys';
import Key from './Key';

export default class Keyboard {
  constructor(input) {
    this.keys = [];
    this.pressedKeys = [];
    this.input = input;
    this.capslock = false;

    if (localStorage.getItem('lang')) {
      this.lang = localStorage.getItem('lang');
    } else {
      this.lang = 'en';
    }

    this.generateKeys();
  }

  generateKeys() {
    if (keysData) {
      for (let i = 1; i <= 5; i += 1) {
        const keysRow = [];
        keysData
          .filter((item) => item.row === i)
          .forEach((item) => keysRow.push(new Key(item)));
        this.keys.push(keysRow);
      }
    }
  }

  render() {
    const keyboard = document.createElement('section');
    keyboard.className = 'keyboard';

    const container = document.createElement('div');
    container.className = 'keyboard-container';

    for (let i = 0; i < 5; i += 1) {
      const row = document.createElement('div');
      row.className = 'keyboard__row row';

      this.keys[i].forEach((key) => {
        row.append(key.render());
      });

      container.append(row);
    }

    keyboard.append(container);
    document.querySelector('main').append(keyboard);
  }

  keyClickHandler(event, elem) {
    const value = elem.textContent;

    if (event.type === 'mousedown') {
      switch (value) {
        case 'Tab':
          this.input.type('\t');
          break;
        case 'Caps Lock':
          if (this.capslock) {
            document.querySelector('.caps-indication span:last-child').textContent = 'Off';
          } else {
            document.querySelector('.caps-indication span:last-child').textContent = 'On';
          }
          this.capsClickHandler();
          break;
        case 'Shift':
          this.capsClickHandler();
          break;
        case 'Alt':
        case 'Win':
        case 'Ctrl':
          break;
        case 'Enter':
          this.input.type('\n');
          break;
        case 'Backspace':
          this.input.clear('left');
          break;
        case 'Del':
          this.input.clear('right');
          break;
        default:
          this.symbolClickHandler(value);
      }
    } else if (event.type === 'mouseup') {
      if (value === 'Shift') {
        this.capsClickHandler();
      }
    }

    Keyboard.keyAction(event, elem);
  }

  capsClickHandler() {
    this.capslock = !this.capslock;

    if (this.lang === 'en') {
      if (this.capslock) {
        this.keys.forEach((row) => row.map((key) => {
          const temp = key;
          temp.value = key.enShift;
          return temp;
        }));
      } else {
        this.keys.map((row) => row.map((key) => {
          const temp = key;
          temp.value = key.en;
          return temp;
        }));
      }
    } else if (this.capslock) {
      this.keys.forEach((row) => row.map((key) => {
        const temp = key;
        temp.value = key.ruShift;
        return temp;
      }));
    } else {
      this.keys.map((row) => row.map((key) => {
        const temp = key;
        temp.value = key.ru;
        return temp;
      }));
    }

    const keysDom = document.querySelectorAll('.key span');
    keysDom.forEach((keyDom) => {
      const temp = keyDom;
      temp.textContent = this.keys.flat().find((key) => keyDom.closest(`.${key.name}`)).value;
      return temp;
    });
  }

  symbolClickHandler(value) {
    this.input.type(value);
  }

  changeLanguage() {
    const indicator = document.querySelector('.lang-indication span:last-child');

    if (this.lang === 'en') {
      this.lang = 'ru';
      indicator.textContent = 'Rus';
    } else {
      this.lang = 'en';
      indicator.textContent = 'Eng';
    }

    localStorage.setItem('lang', this.lang);
  }

  keyPressListener(event) {
    event.preventDefault();
    const eventKey = event.key;

    if (event.type === 'keydown') {
      this.pressedKeys.push(eventKey);
    } else {
      this.pressedKeys = [];
    }

    const mouseEvent = new MouseEvent(`mouse${event.type.slice(3)}`);
    let element;

    switch (eventKey) {
      case 'Tab':
        element = document.querySelector('.key-tab');
        break;
      case 'Control':
        if (event.code === 'ControlRight') {
          element = document.querySelector('.key-right-ctrl');
        } else {
          element = document.querySelector('.key-left-ctrl');
        }

        if (this.pressedKeys.indexOf('Shift') > -1) {
          this.changeLanguage();
        }

        break;
      case 'Shift':
        if (event.repeat) return;
        if (event.code === 'ShiftRight') {
          element = document.querySelector('.key-right-shift');
        } else {
          element = document.querySelector('.key-left-shift');
        }

        if (this.pressedKeys.indexOf('Control') > -1) {
          this.changeLanguage();
        }

        break;
      case 'Alt':
        if (event.code === 'AltRight') {
          element = document.querySelector('.key-right-alt');
        } else {
          element = document.querySelector('.key-left-alt');
        }
        break;
      case 'AltGraph':
        element = document.querySelector('.key-right-alt');
        break;
      case 'CapsLock':
        if (event.repeat) return;
        element = document.querySelector('.key-capslock');
        break;
      case 'Delete':
        element = document.querySelector('.key-del');
        break;
      case 'Backspace':
        element = document.querySelector('.key-backspace');
        break;
      case 'Meta':
        element = document.querySelector('.key-win');
        break;
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'ArrowUp':
      case 'ArrowDown':
        element = document.querySelector(`.key-${event.key.slice(5).toLowerCase()}`);
        break;
      case 'Enter':
        element = document.querySelector('.key-enter');
        break;
      default:
        for (let i = 0; i < 5; i += 1) {
          const pressed = this.keys[i].find((key) => key.en === eventKey
            || key.enShift === eventKey
            || key.ru === eventKey
            || key.ruShift === eventKey);       

          if (pressed) {
            // if (event.keyCode === 191) pressed.name = 'key-slash';
            if (event.keyCode === 59) pressed.name = 'key-semicolon';
            if (event.keyCode === 186) pressed.name = 'key-semicolon';
            if (event.keyCode === 222) pressed.name = 'key-quote';
            if (event.code === 'ShiftRight') pressed.name = 'key-right-shift';
            element = document.querySelector(`.${pressed.name}`);
            break;
          }
        }
        break;
    }
    console.log(event.code);

    if (element) {
      this.keyClickHandler(mouseEvent, element);
    }
  }

  static keyAction(event, key) {
    if (event.type === 'mousedown') {
      key.classList.add('active');
    }

    if (event.type === 'mouseup') {
      key.classList.remove('active');
    }
  }
}
