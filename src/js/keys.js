const keys = [
  // row 1
  {
    name: 'key-backquote',
    en: '`',
    enshift: '~',
    ru: 'ё',
    rushift: 'Ё',
    row: 1,
  },
  {
    name: 'key-1',
    en: '1',
    enshift: '!',
    ru: '1',
    rushift: '!',
    row: 1,
  },
  {
    name: 'key-2',
    en: '2',
    enshift: '@',
    ru: '2',
    rushift: '\'',
    row: 1,
  },
  {
    name: 'key-3',
    en: '3',
    enshift: '#',
    ru: '3',
    rushift: '№',
    row: 1,
  },
  {
    name: 'key-4',
    en: '4',
    enshift: '$',
    ru: '4',
    rushift: ';',
    row: 1,
  },
  {
    name: 'key-5',
    en: '5',
    enshift: '%',
    ru: '5',
    rushift: '%',
    row: 1,
  },
  {
    name: 'key-6',
    en: '6',
    enshift: '^',
    ru: '6',
    rushift: ':',
    row: 1,
  },
  {
    name: 'key-7',
    en: '7',
    enshift: '&',
    ru: '7',
    rushift: '?',
    row: 1,
  },
  {
    name: 'key-8',
    en: '8',
    enshift: '*',
    ru: '8',
    rushift: '*',
    row: 1,
  },
  {
    name: 'key-9',
    en: '9',
    enshift: '(',
    ru: '9',
    rushift: '(',
    row: 1,
  },
  {
    name: 'key-0',
    en: '0',
    enshift: ')',
    ru: '0',
    rushift: ')',
    row: 1,
  },
  {
    name: 'key-minus',
    en: '-',
    enshift: '_',
    ru: '-',
    rushift: '_',
    row: 1,
  },
  {
    name: 'key-equal',
    en: '=',
    enshift: '+',
    ru: '=',
    rushift: '+',
    row: 1,
  },
  {
    name: 'key-backspace',
    en: 'Backspace',
    enshift: 'Backspace',
    ru: 'Backspace',
    rushift: 'Backspace',
    row: 1,
  },

  // row 2
  {
    name: 'key-tab',
    en: 'Tab',
    enshift: 'Tab',
    ru: 'Tab',
    rushift: 'Tab',
    row: 2,
  },
  {
    name: 'key-q',
    en: 'q',
    enshift: 'Q',
    ru: 'й',
    rushift: 'Й',
    row: 2,
  },
  {
    name: 'key-w',
    en: 'w',
    enshift: 'W',
    ru: 'ц',
    rushift: 'Ц',
    row: 2,
  },
  {
    name: 'key-e',
    en: 'e',
    enshift: 'E',
    ru: 'у',
    rushift: 'У',
    row: 2,
  },
  {
    name: 'key-r',
    en: 'r',
    enshift: 'R',
    ru: 'к',
    rushift: 'К',
    row: 2,
  },
  {
    name: 'key-t',
    en: 't',
    enshift: 'T',
    ru: 'е',
    rushift: 'Е',
    row: 2,
  },
  {
    name: 'key-y',
    en: 'y',
    enshift: 'Y',
    ru: 'н',
    rushift: 'Н',
    row: 2,
  },
  {
    name: 'key-u',
    en: 'u',
    enshift: 'U',
    ru: 'г',
    rushift: 'Г',
    row: 2,
  },
  {
    name: 'key-i',
    en: 'i',
    enshift: 'I',
    ru: 'ш',
    rushift: 'Ш',
    row: 2,
  },
  {
    name: 'key-o',
    en: 'o',
    enshift: 'O',
    ru: 'щ',
    rushift: 'Щ',
    row: 2,
  },
  {
    name: 'key-p',
    en: 'p',
    enshift: 'P',
    ru: 'з',
    rushift: 'З',
    row: 2,
  },
  {
    name: 'key-left-bracket',
    en: '[',
    enshift: '{',
    ru: 'х',
    rushift: 'Х',
    row: 2,
  },
  {
    name: 'key-right-bracket',
    en: ']',
    enshift: '}',
    ru: 'ъ',
    rushift: 'Ъ',
    row: 2,
  },
  {
    name: 'key-backslash',
    en: '\\',
    enshift: '|',
    ru: '\\',
    rushift: '|',
    row: 2,
  },
  {
    name: 'key-del',
    en: 'Del',
    enshift: 'Del',
    ru: 'Del',
    rushift: 'Del',
    row: 2,
  },

  // row 3
  {
    name: 'key-capslock',
    en: 'Caps Lock',
    enshift: 'Caps Lock',
    ru: 'Caps Lock',
    rushift: 'Caps Lock',
    row: 3,
  },
  {
    name: 'key-a',
    en: 'a',
    enshift: 'A',
    ru: 'ф',
    rushift: 'Ф',
    row: 3,
  },
  {
    name: 'key-s',
    en: 's',
    enshift: 'S',
    ru: 'ы',
    rushift: 'Ы',
    row: 3,
  },
  {
    name: 'key-d',
    en: 'd',
    enshift: 'D',
    ru: 'в',
    rushift: 'В',
    row: 3,
  },
  {
    name: 'key-f',
    en: 'f',
    enshift: 'F',
    ru: 'а',
    rushift: 'А',
    row: 3,
  },
  {
    name: 'key-g',
    en: 'g',
    enshift: 'G',
    ru: 'п',
    rushift: 'П',
    row: 3,
  },
  {
    name: 'key-h',
    en: 'h',
    enshift: 'H',
    ru: 'р',
    rushift: 'Р',
    row: 3,
  },
  {
    name: 'key-j',
    en: 'j',
    enshift: 'J',
    ru: 'о',
    rushift: 'О',
    row: 3,
  },
  {
    name: 'key-k',
    en: 'k',
    enshift: 'K',
    ru: 'л',
    rushift: 'Л',
    row: 3,
  },
  {
    name: 'key-l',
    en: 'l',
    enshift: 'L',
    ru: 'д',
    rushift: 'Д',
    row: 3,
  },
  {
    name: 'key-semicolon',
    en: ';',
    enshift: ':',
    ru: 'ж',
    rushift: 'Ж',
    row: 3,
  },
  {
    name: 'key-quote',
    en: '\'',
    enshift: '\'',
    ru: 'э',
    rushift: 'Э',
    row: 3,
  },
  {
    name: 'key-enter',
    en: 'Enter',
    enshift: 'Enter',
    ru: 'Enter',
    rushift: 'Enter',
    row: 3,
  },

  // row 4
  {
    name: 'key-left-shift',
    en: 'Shift',
    enshift: 'Shift',
    ru: 'Shift',
    rushift: 'Shift',
    row: 4,
  },
  {
    name: 'key-z',
    en: 'z',
    enshift: 'Z',
    ru: 'я',
    rushift: 'Я',
    row: 4,
  },
  {
    name: 'key-x',
    en: 'x',
    enshift: 'X',
    ru: 'ч',
    rushift: 'Ч',
    row: 4,
  },
  {
    name: 'key-c',
    en: 'c',
    enshift: 'C',
    ru: 'с',
    rushift: 'С',
    row: 4,
  },
  {
    name: 'key-v',
    en: 'v',
    enshift: 'V',
    ru: 'м',
    rushift: 'М',
    row: 4,
  },
  {
    name: 'key-b',
    en: 'b',
    enshift: 'B',
    ru: 'и',
    rushift: 'И',
    row: 4,
  },
  {
    name: 'key-n',
    en: 'n',
    enshift: 'N',
    ru: 'т',
    rushift: 'Т',
    row: 4,
  },
  {
    name: 'key-m',
    en: 'm',
    enshift: 'M',
    ru: 'ь',
    rushift: 'Ь',
    row: 4,
  },
  {
    name: 'key-comma',
    en: ',',
    enshift: '<',
    ru: 'б',
    rushift: 'Б',
    row: 4,
  },
  {
    name: 'key-dot',
    en: '.',
    enshift: '>',
    ru: 'ю',
    rushift: 'Ю',
    row: 4,
  },
  {
    name: 'key-slash',
    en: '/',
    enshift: '?',
    ru: '.',
    rushift: ',',
    row: 4,
  },
  {
    name: 'key-up',
    en: '↑',
    enshift: '↑',
    ru: '↑',
    rushift: '↑',
    row: 4,
  },
  {
    name: 'key-right-shift',
    en: 'Shift',
    enshift: 'Shift',
    ru: 'Shift',
    rushift: 'Shift',
    row: 4,
  },

  // row 5
  {
    name: 'key-left-ctrl',
    en: 'Ctrl',
    enshift: 'Ctrl',
    ru: 'Ctrl',
    rushift: 'Ctrl',
    row: 5,
  },
  {
    name: 'key-win',
    en: 'Win',
    enshift: 'Win',
    ru: 'Win',
    rushift: 'Win',
    row: 5,
  },
  {
    name: 'key-left-alt',
    en: 'Alt',
    enshift: 'Alt',
    ru: 'Alt',
    rushift: 'Alt',
    row: 5,
  },
  {
    name: 'key-space',
    en: ' ',
    enshift: ' ',
    ru: ' ',
    rushift: ' ',
    row: 5,
  },
  {
    name: 'key-right-alt',
    en: 'Alt',
    enshift: 'Alt',
    ru: 'Alt',
    rushift: 'Alt',
    row: 5,
  },
  {
    name: 'key-left',
    en: '←',
    enshift: '←',
    ru: '←',
    rushift: '←',
    row: 5,
  },
  {
    name: 'key-down',
    en: '↓',
    enshift: '↓',
    ru: '↓',
    rushift: '↓',
    row: 5,
  },
  {
    name: 'key-right',
    en: '→',
    enshift: '→',
    ru: '→',
    rushift: '→',
    row: 5,
  },
  {
    name: 'key-right-ctrl',
    en: 'Ctrl',
    enshift: 'Ctrl',
    ru: 'Ctrl',
    rushift: 'Ctrl',
    row: 5,
  },
];

export default keys;
