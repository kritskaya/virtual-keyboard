const keys = [
	// row 1
	{
		name: "key-backquote",
		eng: "`",
		engshift: "~",
		rus: "ё",
		russhift: "Ё"
	},
	{
		name: "key-1",
		eng: "1",
		engshift: "!",
		rus: "1",
		russhift: "!"
	},
	{
		name: "key-2",
		eng: "2",
		engshift: "@",
		rus: "2",
		russhift: "\""
	},
	{
		name: "key-3",
		eng: "3",
		engshift: "#",
		rus: "3",
		russhift: "№"
	},
	{
		name: "key-4",
		eng: "4",
		engshift: "$",
		rus: "4",
		russhift: ";"
	},
	{
		name: "key-5",
		eng: "5",
		engshift: "%",
		rus: "5",
		russhift: "%"
	},
	{
		name: "key-6",
		eng: "6",
		engshift: "^",
		rus: "6",
		russhift: ":"
	},
	{
		name: "key-7",
		eng: "7",
		engshift: "&",
		rus: "7",
		russhift: "?"
	},
	{
		name: "key-8",
		eng: "8",
		engshift: "*",
		rus: "8",
		russhift: "*"
	},
	{
		name: "key-9",
		eng: "9",
		engshift: "(",
		rus: "9",
		russhift: "("
	},
	{
		name: "key-0",
		eng: "0",
		engshift: ")",
		rus: "0",
		russhift: ")"
	},
	{
		name: "key-minus",
		eng: "-",
		engshift: "_",
		rus: "-",
		russhift: "_"
	},
	{
		name: "key-equal",
		eng: "=",
		engshift: "+",
		rus: "=",
		russhift: "+"
	},
	{
		name: "key-func-backspace",
		eng: "",
		engshift: "",
		rus: "",
		russhift: ""
	},

	// row 2
	{
		name: "key-func-tab",
		eng: "",
		engshift: "",
		rus: "",
		russhift: ""
	},
	{
		name: "key-q",
		eng: "q",
		engshift: "Q",
		rus: "й",
		russhift: "Й"
	},
	{
		name: "key-w",
		eng: "w",
		engshift: "W",
		rus: "ц",
		russhift: "Ц"
	},
	{
		name: "key-e",
		eng: "e",
		engshift: "E",
		rus: "у",
		russhift: "У"
	},
	{
		name: "key-r",
		eng: "r",
		engshift: "R",
		rus: "к",
		russhift: "К"
	},
	{
		name: "key-t",
		eng: "t",
		engshift: "T",
		rus: "е",
		russhift: "Е"
	},
	{
		name: "key-y",
		eng: "y",
		engshift: "Y",
		rus: "н",
		russhift: "Н"
	},
	{
		name: "key-u",
		eng: "u",
		engshift: "U",
		rus: "г",
		russhift: "Г"
	},
	{
		name: "key-i",
		eng: "i",
		engshift: "I",
		rus: "ш",
		russhift: "Ш"
	},
	{
		name: "key-o",
		eng: "o",
		engshift: "O",
		rus: "щ",
		russhift: "Щ"
	},
	{
		name: "key-p",
		eng: "p",
		engshift: "P",
		rus: "з",
		russhift: "З"
	},
	{
		name: "key-left-bracket",
		eng: "[",
		engshift: "{",
		rus: "х",
		russhift: "Х"
	},
	{
		name: "key-right-bracket",
		eng: "]",
		engshift: "}",
		rus: "ъ",
		russhift: "Ъ"
	},
	{
		name: "key-backslash",
		eng: "\\",
		engshift: "|",
		rus: "\\",
		russhift: "/"
	},
	{
		name: "key-func-del",
		eng: "",
		engshift: "",
		rus: "",
		russhift: ""
	},

	// row 3
	{
		name: "key-capslock",
		eng: "",
		engshift: "",
		rus: "",
		russhift: ""
	},
	{
		name: "key-a",
		eng: "a",
		engshift: "A",
		rus: "ф",
		russhift: "Ф"
	},
	{
		name: "key-s",
		eng: "s",
		engshift: "S",
		rus: "ы",
		russhift: "Ы"
	},
	{
		name: "key-d",
		eng: "d",
		engshift: "D",
		rus: "в",
		russhift: "В"
	},
	{
		name: "key-f",
		eng: "f",
		engshift: "F",
		rus: "а",
		russhift: "А"
	},
	{
		name: "key-g",
		eng: "g",
		engshift: "G",
		rus: "п",
		russhift: "П"
	},
	{
		name: "key-h",
		eng: "h",
		engshift: "H",
		rus: "р",
		russhift: "Р"
	},
	{
		name: "key-j",
		eng: "j",
		engshift: "J",
		rus: "о",
		russhift: "О"
	},
	{
		name: "key-k",
		eng: "k",
		engshift: "K",
		rus: "л",
		russhift: "Л"
	},
	{
		name: "key-l",
		eng: "l",
		engshift: "L",
		rus: "д",
		russhift: "Д"
	},
	{
		name: "key-semicolon",
		eng: ";",
		engshift: ":",
		rus: "ж",
		russhift: "Ж"
	},
	{
		name: "key-quote",
		eng: "'",
		engshift: "\"",
		rus: "э",
		russhift: "Э"
	},
	{
		name: "key-func-enter",
		eng: "",
		engshift: "",
		rus: "",
		russhift: ""
	},

	// row 4
	{
		name: "key-func-left-shift",
		eng: "",
		engshift: "",
		rus: "",
		russhift: ""
	},
	{
		name: "key-z",
		eng: "z",
		engshift: "Z",
		rus: "я",
		russhift: "Я"
	},
	{
		name: "key-x",
		eng: "x",
		engshift: "X",
		rus: "ч",
		russhift: "Ч"
	},
	{
		name: "key-c",
		eng: "c",
		engshift: "C",
		rus: "с",
		russhift: "С"
	},
	{
		name: "key-v",
		eng: "v",
		engshift: "V",
		rus: "м",
		russhift: "М"
	},
	{
		name: "key-b",
		eng: "b",
		engshift: "B",
		rus: "и",
		russhift: "И"
	},
	{
		name: "key-n",
		eng: "n",
		engshift: "N",
		rus: "т",
		russhift: "Т"
	},
	{
		name: "key-m",
		eng: "m",
		engshift: "M",
		rus: "ь",
		russhift: "Ь"
	},
	{
		name: "key-comma",
		eng: ",",
		engshift: "&lt;",
		rus: "б",
		russhift: "Б"
	},
	{
		name: "key-dot",
		eng: ".",
		engshift: "&gt;",
		rus: "ю",
		russhift: "Ю"
	},
	{
		name: "key-slash",
		eng: "/",
		engshift: "?",
		rus: ".",
		russhift: ","
	},
	{
		name: "key-func-up",
		eng: "",
		engshift: "",
		rus: "",
		russhift: ""
	},
	{
		name: "key-func-right-shift",
		eng: "",
		engshift: "",
		rus: "",
		russhift: ""
	},

	// row 5
	{
		name: "key-func-left-ctrl",
		eng: "",
		engshift: "",
		rus: "",
		russhift: ""
	},
	{
		name: "key-func-win",
		eng: "",
		engshift: "",
		rus: "",
		russhift: ""
	},
	{
		name: "key-func-left-alt",
		eng: "",
		engshift: "",
		rus: "",
		russhift: ""
	},
	{
		name: "key-func-space",
		eng: "",
		engshift: "",
		rus: "",
		russhift: ""
	},
	{
		name: "key-func-right-alt",
		eng: "",
		engshift: "",
		rus: "",
		russhift: ""
	},
	{
		name: "key-func-left",
		eng: "",
		engshift: "",
		rus: "",
		russhift: ""
	},
	{
		name: "key-func-down",
		eng: "",
		engshift: "",
		rus: "",
		russhift: ""
	},
	{
		name: "key-func-right",
		eng: "",
		engshift: "",
		rus: "",
		russhift: ""
	},
	{
		name: "key-func-right-ctrl",
		eng: "",
		engshift: "",
		rus: "",
		russhift: ""
	},
]