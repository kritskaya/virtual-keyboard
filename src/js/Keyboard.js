import keysData from './keys.js';
import Key from './Key.js';

export default class Keyboard {
  constructor(input) {
    this.keys = [];
    this.input = input;
    this.capslock = false;
    this.lang = 'en';
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
          this.capsClickHandler();
          break;
        case 'Shift':
          this.capsClickHandler();
          break;
        case 'Ctrl':
          this.ctrlClickHandler();
          break;
        case 'Alt':
          this.altClickHandler();
          break;
        case 'Win':
          this.winClickHandler();
          break;
        case 'Enter':
          this.enterClickHandler();
          break;
        case 'Backspace':
          //this.backspaceClickHandler();
          this.input.clear('left');
          break;
        case 'Del':
          //this.delClickHandler();
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
    console.log(this.capslock + this.lang);

    if (this.lang === 'en') {
      if (this.capslock) {
        this.keys.forEach((row) => row.map((key) => key.value = key.enShift));
      } else {
        this.keys.map((row) => row.map((key) => key.value = key.en));
      }
    } else {
      if (this.capslock) {
        this.keys.map((key) => key.value = key.ruShift);
      } else {
        this.keys.map((key) => key.value = key.ru);
      }
    }

    //console.log(this.keys);

    const keysDom = document.querySelectorAll('.key span');
    keysDom.forEach((keyDom) => {
      //this.keys.flat().find((key) => keyDom.closest(key.name));
      keyDom.textContent = this.keys.flat().find((key) => keyDom.closest(`.${key.name}`)).value;
    })
  }

  shiftClickHandler() {
    // alert('tab');
  }

  ctrlClickHandler() {
    // alert('tab');
  }

  altClickHandler() {
    // alert('tab');
  }
  
  winClickHandler() {
    // alert('tab');
  }

  enterClickHandler() {
    // alert('tab');
  }

  symbolClickHandler(value) {
    this.input.type(value);
  }

  changeLanguage() {
    // alert('tab');
  }

  keyPressListener(event) {
    event.preventDefault();
    const eventKey = event.key;

    const mouseEvent = new MouseEvent(`mouse${event.type.slice(3)}`);
    let element;

    switch (eventKey) {
      case 'Tab':
        element = document.querySelector('.key-func-tab');
        break;
      case 'Control':
        if (event.code === 'ControlRight') {
          element = document.querySelector('.key-func-right-ctrl');
        } else {
          element = document.querySelector('.key-func-left-ctrl');
        }
        break;
      case 'Shift':
        if (event.repeat) return;
        if (event.code === 'ShiftRight') {
          element = document.querySelector('.key-func-right-shift');
        } else {
          element = document.querySelector('.key-func-left-shift');
        }
        break;
      case 'Alt':
        if (event.code === 'AltRight') {
          element = document.querySelector('.key-func-right-alt');
        } else {
          element = document.querySelector('.key-func-left-alt');
        }
        break;
      case 'AltGraph':
        element = document.querySelector('.key-func-right-alt');
        break;
      case 'CapsLock':
        if (event.repeat) return;
        element = document.querySelector('.key-func-capslock');
        break;
      case 'Delete':
        element = document.querySelector('.key-func-del');
        break;
      case 'Backspace':
        element = document.querySelector('.key-func-backspace');
        break;
      case 'Meta':
        element = document.querySelector('.key-func-win');
        break;
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'ArrowUp':
      case 'ArrowDown':
        element = document.querySelector(`.key-func-${event.key.slice(5).toLowerCase()}`);
        break;
      case 'Enter':
        element = document.querySelector('.key-func-enter');
        break;
      default:
        for (let i = 0; i < 5; i += 1) {
          const pressed = this.keys[i].find((key) => key.en === eventKey
            || key.enShift === eventKey
            || key.ru === eventKey
            || key.ruShift === eventKey);
          if (pressed) {
            element = document.querySelector(`.${pressed.name}`);
            break;
          }
        }
    }

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
