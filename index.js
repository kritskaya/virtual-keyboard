/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Indication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Indication */ \"./src/js/Indication.js\");\n/* harmony import */ var _js_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Input */ \"./src/js/Input.js\");\n/* harmony import */ var _js_Keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/Keyboard */ \"./src/js/Keyboard.js\");\n\n\n\n\nwindow.onload = () => {\n  const main = document.createElement('main');\n  main.className = 'wrapper';\n  document.body.prepend(main);\n\n  const input = new _js_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  input.render();\n\n  const keyboard = new _js_Keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"](input);\n  keyboard.render();\n\n  const indication = new _js_Indication__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  indication.render();\n\n  document.querySelector('.input').addEventListener('click', (event) => {\n    input.cursorPos = event.target.selectionStart;\n  });\n\n  document.addEventListener('keydown', (event) => {\n    keyboard.keyPressListener(event);\n  });\n\n  document.addEventListener('keyup', (event) => {\n    keyboard.keyPressListener(event);\n  });\n\n  document.querySelector('.keyboard').addEventListener('mousedown', (event) => {\n    if (event.target.closest('.key')) {\n      keyboard.keyClickHandler(event, event.target.closest('.key'));\n    }\n  });\n\n  document.querySelector('.keyboard').addEventListener('mouseup', (event) => {\n    if (event.target.closest('.key')) {\n      keyboard.keyClickHandler(event, event.target.closest('.key'));\n      document.querySelector('.input').focus();\n    }\n  });\n\n  document.querySelector('.lang-indication span:last-child').addEventListener('click', () => {\n    keyboard.changeLanguage();\n    keyboard.capsClickHandler();\n    keyboard.capsClickHandler();\n  });\n};\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/js/Indication.js":
/*!******************************!*\
  !*** ./src/js/Indication.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Indication)\n/* harmony export */ });\nclass Indication {\n  render() {\n    const indication = document.createElement('section');\n    indication.className = 'indication';\n\n    const indicationBlock = document.createElement('div');\n    indicationBlock.className = 'indication__items';\n\n    const caps = document.createElement('div');\n    caps.className = 'indication__item caps-indication';\n    const capsName = document.createElement('span');\n    capsName.textContent = 'Caps Lock:';\n    const capsValue = document.createElement('span');\n    capsValue.textContent = 'Off';\n    caps.append(capsName, capsValue);\n    this.caps = false;\n\n    const lang = document.createElement('div');\n    lang.className = 'indication__item lang-indication';\n    const langName = document.createElement('span');\n    langName.textContent = 'Language:';\n    const langValue = document.createElement('span');\n    langValue.textContent = 'Eng';\n    lang.append(langName, langValue);\n    this.lang = 'en';\n\n    indicationBlock.append(caps, lang);\n\n    const description = document.createElement('p');\n    description.innerHTML = `Комбинация клавиш для смены языка Ctrl + Shift или клик на индикаторе<br>\n    Клавиатура создана в операционной системе Windows`;\n\n    indication.append(indicationBlock, description);\n\n    document.querySelector('main').append(indication);\n  }\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/js/Indication.js?");

/***/ }),

/***/ "./src/js/Input.js":
/*!*************************!*\
  !*** ./src/js/Input.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Input {\n  constructor() {\n    this.inputDom = null;\n    this.cursorPos = 0;\n  }\n\n  render() {\n    const block = document.createElement('section');\n    block.className = 'input-block';\n\n    const textarea = document.createElement('textarea');\n    textarea.classList = 'input';\n    block.append(textarea);\n\n    document.querySelector('main').append(block);\n\n    this.inputDom = textarea;\n  }\n\n  type(value) {\n    this.inputDom.setSelectionRange(this.cursorPos, this.cursorPos);\n    this.inputDom.focus();\n\n    this.inputDom.setRangeText(value, this.cursorPos, this.cursorPos);\n    this.cursorPos += value.length;\n\n    this.inputDom.setSelectionRange(this.cursorPos, this.cursorPos);\n    this.inputDom.focus();\n  }\n\n  clear(direction) {\n    this.inputDom.setSelectionRange(this.cursorPos, this.cursorPos);\n    this.inputDom.focus();\n\n    if (direction === 'left' && this.cursorPos !== 0) {\n      this.inputDom.setRangeText('', this.cursorPos - 1, this.cursorPos);\n      this.cursorPos -= 1;\n    }\n\n    if (direction === 'right' && this.cursorPos !== this.inputDom.length - 1) {\n      this.inputDom.setRangeText('', this.cursorPos, this.cursorPos + 1);\n    }\n\n    this.inputDom.setSelectionRange(this.cursorPos, this.cursorPos);\n    this.inputDom.focus();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/js/Input.js?");

/***/ }),

/***/ "./src/js/Key.js":
/*!***********************!*\
  !*** ./src/js/Key.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Key)\n/* harmony export */ });\nclass Key {\n  constructor(data) {\n    this.name = data.name;\n\n    if (localStorage.getItem('lang')) {\n      this.value = data[`${localStorage.getItem('lang')}`];\n    } else {\n      this.value = data.en;\n    }\n    this.en = data.en;\n    this.enShift = data.enshift;\n    this.ru = data.ru;\n    this.ruShift = data.rushift;\n  }\n\n  render() {\n    const key = document.createElement('div');\n    key.className = 'keyboard__key key';\n    key.classList.add(this.name);\n\n    const value = document.createElement('span');\n    value.textContent = this.value;\n\n    key.append(value);\n    return key;\n  }\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/js/Key.js?");

/***/ }),

/***/ "./src/js/Keyboard.js":
/*!****************************!*\
  !*** ./src/js/Keyboard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Keyboard)\n/* harmony export */ });\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys */ \"./src/js/keys.js\");\n/* harmony import */ var _Key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Key */ \"./src/js/Key.js\");\n\n\n\nclass Keyboard {\n  constructor(input) {\n    this.keys = [];\n    this.pressedKeys = [];\n    this.input = input;\n    this.capslock = false;\n\n    if (localStorage.getItem('lang')) {\n      this.lang = localStorage.getItem('lang');\n    } else {\n      this.lang = 'en';\n    }\n\n    this.generateKeys();\n  }\n\n  generateKeys() {\n    if (_keys__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      for (let i = 1; i <= 5; i += 1) {\n        const keysRow = [];\n        _keys__WEBPACK_IMPORTED_MODULE_0__[\"default\"].filter((item) => item.row === i)\n          .forEach((item) => keysRow.push(new _Key__WEBPACK_IMPORTED_MODULE_1__[\"default\"](item)));\n        this.keys.push(keysRow);\n      }\n    }\n  }\n\n  render() {\n    const keyboard = document.createElement('section');\n    keyboard.className = 'keyboard';\n\n    const container = document.createElement('div');\n    container.className = 'keyboard-container';\n\n    for (let i = 0; i < 5; i += 1) {\n      const row = document.createElement('div');\n      row.className = 'keyboard__row row';\n\n      this.keys[i].forEach((key) => {\n        row.append(key.render());\n      });\n\n      container.append(row);\n    }\n\n    keyboard.append(container);\n    document.querySelector('main').append(keyboard);\n  }\n\n  keyClickHandler(event, elem) {\n    const value = elem.textContent;\n\n    if (event.type === 'mousedown') {\n      switch (value) {\n        case 'Tab':\n          this.input.type('\\t');\n          break;\n        case 'Caps Lock':\n          if (this.capslock) {\n            document.querySelector('.caps-indication span:last-child').textContent = 'Off';\n          } else {\n            document.querySelector('.caps-indication span:last-child').textContent = 'On';\n          }\n          this.capsClickHandler();\n          break;\n        case 'Shift':\n          this.capsClickHandler();\n          break;\n        case 'Alt':\n        case 'Win':\n        case 'Ctrl':\n          break;\n        case 'Enter':\n          this.input.type('\\n');\n          break;\n        case 'Backspace':\n          this.input.clear('left');\n          break;\n        case 'Del':\n          this.input.clear('right');\n          break;\n        default:\n          this.symbolClickHandler(value);\n      }\n    } else if (event.type === 'mouseup') {\n      if (value === 'Shift') {\n        this.capsClickHandler();\n      }\n    }\n\n    Keyboard.keyAction(event, elem);\n  }\n\n  capsClickHandler() {\n    this.capslock = !this.capslock;\n\n    if (this.lang === 'en') {\n      if (this.capslock) {\n        this.keys.forEach((row) => row.map((key) => {\n          const temp = key;\n          temp.value = key.enShift;\n          return temp;\n        }));\n      } else {\n        this.keys.map((row) => row.map((key) => {\n          const temp = key;\n          temp.value = key.en;\n          return temp;\n        }));\n      }\n    } else if (this.capslock) {\n      this.keys.forEach((row) => row.map((key) => {\n        const temp = key;\n        temp.value = key.ruShift;\n        return temp;\n      }));\n    } else {\n      this.keys.map((row) => row.map((key) => {\n        const temp = key;\n        temp.value = key.ru;\n        return temp;\n      }));\n    }\n\n    const keysDom = document.querySelectorAll('.key span');\n    keysDom.forEach((keyDom) => {\n      const temp = keyDom;\n      temp.textContent = this.keys.flat().find((key) => keyDom.closest(`.${key.name}`)).value;\n      return temp;\n    });\n  }\n\n  symbolClickHandler(value) {\n    this.input.type(value);\n  }\n\n  changeLanguage() {\n    const indicator = document.querySelector('.lang-indication span:last-child');\n\n    if (this.lang === 'en') {\n      this.lang = 'ru';\n      indicator.textContent = 'Rus';\n    } else {\n      this.lang = 'en';\n      indicator.textContent = 'Eng';\n    }\n\n    localStorage.setItem('lang', this.lang);\n  }\n\n  keyPressListener(event) {\n    event.preventDefault();\n    const eventKey = event.key;\n\n    if (event.type === 'keydown') {\n      this.pressedKeys.push(eventKey);\n    } else {\n      this.pressedKeys = [];\n    }\n\n    const mouseEvent = new MouseEvent(`mouse${event.type.slice(3)}`);\n    let element;\n\n    switch (eventKey) {\n      case 'Tab':\n        element = document.querySelector('.key-tab');\n        break;\n      case 'Control':\n        if (event.code === 'ControlRight') {\n          element = document.querySelector('.key-right-ctrl');\n        } else {\n          element = document.querySelector('.key-left-ctrl');\n        }\n\n        if (this.pressedKeys.indexOf('Shift') > -1) {\n          this.changeLanguage();\n        }\n\n        break;\n      case 'Shift':\n        if (event.repeat) return;\n        if (event.code === 'ShiftRight') {\n          element = document.querySelector('.key-right-shift');\n        } else {\n          element = document.querySelector('.key-left-shift');\n        }\n\n        if (this.pressedKeys.indexOf('Control') > -1) {\n          this.changeLanguage();\n        }\n\n        break;\n      case 'Alt':\n        if (event.code === 'AltRight') {\n          element = document.querySelector('.key-right-alt');\n        } else {\n          element = document.querySelector('.key-left-alt');\n        }\n        break;\n      case 'AltGraph':\n        element = document.querySelector('.key-right-alt');\n        break;\n      case 'CapsLock':\n        if (event.repeat) return;\n        element = document.querySelector('.key-capslock');\n        break;\n      case 'Delete':\n        element = document.querySelector('.key-del');\n        break;\n      case 'Backspace':\n        element = document.querySelector('.key-backspace');\n        break;\n      case 'Meta':\n        element = document.querySelector('.key-win');\n        break;\n      case 'ArrowLeft':\n      case 'ArrowRight':\n      case 'ArrowUp':\n      case 'ArrowDown':\n        element = document.querySelector(`.key-${event.key.slice(5).toLowerCase()}`);\n        break;\n      case 'Enter':\n        element = document.querySelector('.key-enter');\n        break;\n      default:\n        for (let i = 0; i < 5; i += 1) {\n          const pressed = this.keys[i].find((key) => key.en === eventKey\n            || key.enShift === eventKey\n            || key.ru === eventKey\n            || key.ruShift === eventKey);\n\n          // if (event.keyCode === 191) pressed.name = 'key-slash';\n          // if (event.keyCode === 59) pressed.name = 'key-semicolon';\n          // if (event.keyCode === 222) pressed.name = 'key-quote';\n          \n\n          if (pressed) {\n            // if (event.keyCode === 191) pressed.name = 'key-slash';\n            if (event.keyCode === 59) pressed.name = 'key-semicolon';\n            if (event.keyCode === 186) pressed.name = 'key-semicolon';\n            if (event.keyCode === 222) pressed.name = 'key-quote';\n            if (event.code === 'ShiftRight') pressed.name = 'key-right-shift';\n            element = document.querySelector(`.${pressed.name}`);\n            break;\n          }\n        }\n        break;\n    }\n    console.log(event.code);\n\n    if (element) {\n      this.keyClickHandler(mouseEvent, element);\n    }\n  }\n\n  static keyAction(event, key) {\n    if (event.type === 'mousedown') {\n      key.classList.add('active');\n    }\n\n    if (event.type === 'mouseup') {\n      key.classList.remove('active');\n    }\n  }\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/js/Keyboard.js?");

/***/ }),

/***/ "./src/js/keys.js":
/*!************************!*\
  !*** ./src/js/keys.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst keys = [\n  // row 1\n  {\n    name: 'key-backquote',\n    en: '`',\n    enshift: '~',\n    ru: 'ё',\n    rushift: 'Ё',\n    row: 1,\n  },\n  {\n    name: 'key-1',\n    en: '1',\n    enshift: '!',\n    ru: '1',\n    rushift: '!',\n    row: 1,\n  },\n  {\n    name: 'key-2',\n    en: '2',\n    enshift: '@',\n    ru: '2',\n    rushift: '\\'',\n    row: 1,\n  },\n  {\n    name: 'key-3',\n    en: '3',\n    enshift: '#',\n    ru: '3',\n    rushift: '№',\n    row: 1,\n  },\n  {\n    name: 'key-4',\n    en: '4',\n    enshift: '$',\n    ru: '4',\n    rushift: ';',\n    row: 1,\n  },\n  {\n    name: 'key-5',\n    en: '5',\n    enshift: '%',\n    ru: '5',\n    rushift: '%',\n    row: 1,\n  },\n  {\n    name: 'key-6',\n    en: '6',\n    enshift: '^',\n    ru: '6',\n    rushift: ':',\n    row: 1,\n  },\n  {\n    name: 'key-7',\n    en: '7',\n    enshift: '&',\n    ru: '7',\n    rushift: '?',\n    row: 1,\n  },\n  {\n    name: 'key-8',\n    en: '8',\n    enshift: '*',\n    ru: '8',\n    rushift: '*',\n    row: 1,\n  },\n  {\n    name: 'key-9',\n    en: '9',\n    enshift: '(',\n    ru: '9',\n    rushift: '(',\n    row: 1,\n  },\n  {\n    name: 'key-0',\n    en: '0',\n    enshift: ')',\n    ru: '0',\n    rushift: ')',\n    row: 1,\n  },\n  {\n    name: 'key-minus',\n    en: '-',\n    enshift: '_',\n    ru: '-',\n    rushift: '_',\n    row: 1,\n  },\n  {\n    name: 'key-equal',\n    en: '=',\n    enshift: '+',\n    ru: '=',\n    rushift: '+',\n    row: 1,\n  },\n  {\n    name: 'key-backspace',\n    en: 'Backspace',\n    enshift: 'Backspace',\n    ru: 'Backspace',\n    rushift: 'Backspace',\n    row: 1,\n  },\n\n  // row 2\n  {\n    name: 'key-tab',\n    en: 'Tab',\n    enshift: 'Tab',\n    ru: 'Tab',\n    rushift: 'Tab',\n    row: 2,\n  },\n  {\n    name: 'key-q',\n    en: 'q',\n    enshift: 'Q',\n    ru: 'й',\n    rushift: 'Й',\n    row: 2,\n  },\n  {\n    name: 'key-w',\n    en: 'w',\n    enshift: 'W',\n    ru: 'ц',\n    rushift: 'Ц',\n    row: 2,\n  },\n  {\n    name: 'key-e',\n    en: 'e',\n    enshift: 'E',\n    ru: 'у',\n    rushift: 'У',\n    row: 2,\n  },\n  {\n    name: 'key-r',\n    en: 'r',\n    enshift: 'R',\n    ru: 'к',\n    rushift: 'К',\n    row: 2,\n  },\n  {\n    name: 'key-t',\n    en: 't',\n    enshift: 'T',\n    ru: 'е',\n    rushift: 'Е',\n    row: 2,\n  },\n  {\n    name: 'key-y',\n    en: 'y',\n    enshift: 'Y',\n    ru: 'н',\n    rushift: 'Н',\n    row: 2,\n  },\n  {\n    name: 'key-u',\n    en: 'u',\n    enshift: 'U',\n    ru: 'г',\n    rushift: 'Г',\n    row: 2,\n  },\n  {\n    name: 'key-i',\n    en: 'i',\n    enshift: 'I',\n    ru: 'ш',\n    rushift: 'Ш',\n    row: 2,\n  },\n  {\n    name: 'key-o',\n    en: 'o',\n    enshift: 'O',\n    ru: 'щ',\n    rushift: 'Щ',\n    row: 2,\n  },\n  {\n    name: 'key-p',\n    en: 'p',\n    enshift: 'P',\n    ru: 'з',\n    rushift: 'З',\n    row: 2,\n  },\n  {\n    name: 'key-left-bracket',\n    en: '[',\n    enshift: '{',\n    ru: 'х',\n    rushift: 'Х',\n    row: 2,\n  },\n  {\n    name: 'key-right-bracket',\n    en: ']',\n    enshift: '}',\n    ru: 'ъ',\n    rushift: 'Ъ',\n    row: 2,\n  },\n  {\n    name: 'key-backslash',\n    en: '\\\\',\n    enshift: '|',\n    ru: '\\\\',\n    rushift: '|',\n    row: 2,\n  },\n  {\n    name: 'key-del',\n    en: 'Del',\n    enshift: 'Del',\n    ru: 'Del',\n    rushift: 'Del',\n    row: 2,\n  },\n\n  // row 3\n  {\n    name: 'key-capslock',\n    en: 'Caps Lock',\n    enshift: 'Caps Lock',\n    ru: 'Caps Lock',\n    rushift: 'Caps Lock',\n    row: 3,\n  },\n  {\n    name: 'key-a',\n    en: 'a',\n    enshift: 'A',\n    ru: 'ф',\n    rushift: 'Ф',\n    row: 3,\n  },\n  {\n    name: 'key-s',\n    en: 's',\n    enshift: 'S',\n    ru: 'ы',\n    rushift: 'Ы',\n    row: 3,\n  },\n  {\n    name: 'key-d',\n    en: 'd',\n    enshift: 'D',\n    ru: 'в',\n    rushift: 'В',\n    row: 3,\n  },\n  {\n    name: 'key-f',\n    en: 'f',\n    enshift: 'F',\n    ru: 'а',\n    rushift: 'А',\n    row: 3,\n  },\n  {\n    name: 'key-g',\n    en: 'g',\n    enshift: 'G',\n    ru: 'п',\n    rushift: 'П',\n    row: 3,\n  },\n  {\n    name: 'key-h',\n    en: 'h',\n    enshift: 'H',\n    ru: 'р',\n    rushift: 'Р',\n    row: 3,\n  },\n  {\n    name: 'key-j',\n    en: 'j',\n    enshift: 'J',\n    ru: 'о',\n    rushift: 'О',\n    row: 3,\n  },\n  {\n    name: 'key-k',\n    en: 'k',\n    enshift: 'K',\n    ru: 'л',\n    rushift: 'Л',\n    row: 3,\n  },\n  {\n    name: 'key-l',\n    en: 'l',\n    enshift: 'L',\n    ru: 'д',\n    rushift: 'Д',\n    row: 3,\n  },\n  {\n    name: 'key-semicolon',\n    en: ';',\n    enshift: ':',\n    ru: 'ж',\n    rushift: 'Ж',\n    row: 3,\n  },\n  {\n    name: 'key-quote',\n    en: '\\'',\n    enshift: '\\'',\n    ru: 'э',\n    rushift: 'Э',\n    row: 3,\n  },\n  {\n    name: 'key-enter',\n    en: 'Enter',\n    enshift: 'Enter',\n    ru: 'Enter',\n    rushift: 'Enter',\n    row: 3,\n  },\n\n  // row 4\n  {\n    name: 'key-left-shift',\n    en: 'Shift',\n    enshift: 'Shift',\n    ru: 'Shift',\n    rushift: 'Shift',\n    row: 4,\n  },\n  {\n    name: 'key-z',\n    en: 'z',\n    enshift: 'Z',\n    ru: 'я',\n    rushift: 'Я',\n    row: 4,\n  },\n  {\n    name: 'key-x',\n    en: 'x',\n    enshift: 'X',\n    ru: 'ч',\n    rushift: 'Ч',\n    row: 4,\n  },\n  {\n    name: 'key-c',\n    en: 'c',\n    enshift: 'C',\n    ru: 'с',\n    rushift: 'С',\n    row: 4,\n  },\n  {\n    name: 'key-v',\n    en: 'v',\n    enshift: 'V',\n    ru: 'м',\n    rushift: 'М',\n    row: 4,\n  },\n  {\n    name: 'key-b',\n    en: 'b',\n    enshift: 'B',\n    ru: 'и',\n    rushift: 'И',\n    row: 4,\n  },\n  {\n    name: 'key-n',\n    en: 'n',\n    enshift: 'N',\n    ru: 'т',\n    rushift: 'Т',\n    row: 4,\n  },\n  {\n    name: 'key-m',\n    en: 'm',\n    enshift: 'M',\n    ru: 'ь',\n    rushift: 'Ь',\n    row: 4,\n  },\n  {\n    name: 'key-comma',\n    en: ',',\n    enshift: '<',\n    ru: 'б',\n    rushift: 'Б',\n    row: 4,\n  },\n  {\n    name: 'key-dot',\n    en: '.',\n    enshift: '>',\n    ru: 'ю',\n    rushift: 'Ю',\n    row: 4,\n  },\n  {\n    name: 'key-slash',\n    en: '/',\n    enshift: '?',\n    ru: '.',\n    rushift: ',',\n    row: 4,\n  },\n  {\n    name: 'key-up',\n    en: '↑',\n    enshift: '↑',\n    ru: '↑',\n    rushift: '↑',\n    row: 4,\n  },\n  {\n    name: 'key-right-shift',\n    en: 'Shift',\n    enshift: 'Shift',\n    ru: 'Shift',\n    rushift: 'Shift',\n    row: 4,\n  },\n\n  // row 5\n  {\n    name: 'key-left-ctrl',\n    en: 'Ctrl',\n    enshift: 'Ctrl',\n    ru: 'Ctrl',\n    rushift: 'Ctrl',\n    row: 5,\n  },\n  {\n    name: 'key-win',\n    en: 'Win',\n    enshift: 'Win',\n    ru: 'Win',\n    rushift: 'Win',\n    row: 5,\n  },\n  {\n    name: 'key-left-alt',\n    en: 'Alt',\n    enshift: 'Alt',\n    ru: 'Alt',\n    rushift: 'Alt',\n    row: 5,\n  },\n  {\n    name: 'key-space',\n    en: ' ',\n    enshift: ' ',\n    ru: ' ',\n    rushift: ' ',\n    row: 5,\n  },\n  {\n    name: 'key-right-alt',\n    en: 'Alt',\n    enshift: 'Alt',\n    ru: 'Alt',\n    rushift: 'Alt',\n    row: 5,\n  },\n  {\n    name: 'key-left',\n    en: '←',\n    enshift: '←',\n    ru: '←',\n    rushift: '←',\n    row: 5,\n  },\n  {\n    name: 'key-down',\n    en: '↓',\n    enshift: '↓',\n    ru: '↓',\n    rushift: '↓',\n    row: 5,\n  },\n  {\n    name: 'key-right',\n    en: '→',\n    enshift: '→',\n    ru: '→',\n    rushift: '→',\n    row: 5,\n  },\n  {\n    name: 'key-right-ctrl',\n    en: 'Ctrl',\n    enshift: 'Ctrl',\n    ru: 'Ctrl',\n    rushift: 'Ctrl',\n    row: 5,\n  },\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keys);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/js/keys.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;