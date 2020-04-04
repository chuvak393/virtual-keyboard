const KeyCodes = [
  'Backquote',
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'Digit0',
  'Minus',
  'Equal',
  'Backspace',
  'Tab',
  'KeyQ',
  'KeyW',
  'KeyE',
  'KeyR',
  'KeyT',
  'KeyY',
  'KeyU',
  'KeyI',
  'KeyO',
  'KeyP',
  'BracketLeft',
  'BracketRight',
  'Backslash',
  'Delete',
  'CapsLock',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyJ',
  'KeyK',
  'KeyL',
  'Semicolon',
  'Quote',
  'Enter',
  'ShiftLeft',
  'KeyZ',
  'KeyX',
  'KeyC',
  'KeyV',
  'KeyB',
  'KeyN',
  'KeyM',
  'Comma',
  'Period',
  'Slash',
  'ArrowUp',
  'ShiftRight',
  'ControlLeft',
  'MetaLeft',
  'AltLeft',
  'Space',
  'AltRight',
  'ControlRight',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
];

const LangRu = [
  ['ё', 'Ё'],
  ['1', '!'],
  ['2', '"'],
  ['3', '№'],
  ['4', ';'],
  ['5', '%'],
  ['6', ':'],
  ['7', '?'],
  ['8', '*'],
  ['9', '('],
  ['0', ')'],
  ['-', '_'],
  ['=', '+'],
  'Backspace',
  'Tab',
  ['й', 'Й'],
  ['ц', 'Ц'],
  ['у', 'У'],
  ['к', 'К'],
  ['е', 'Е'],
  ['н', 'Н'],
  ['г', 'Г'],
  ['ш', 'Ш'],
  ['щ', 'Щ'],
  ['з', 'З'],
  ['х', 'Х'],
  ['ъ', 'Ъ'],
  ['⟍', '/'],
  'Del',
  'Caps Lock',
  ['ф', 'Ф'],
  ['ы', 'Ы'],
  ['в', 'В'],
  ['а', 'А'],
  ['п', 'П'],
  ['р', 'Р'],
  ['о', 'О'],
  ['л', 'Л'],
  ['д', 'Д'],
  ['ж', 'Ж'],
  ['э', 'Э'],
  'Enter',
  'Shift',
  ['я', 'Я'],
  ['ч', 'Ч'],
  ['с', 'С'],
  ['м', 'М'],
  ['и', 'И'],
  ['т', 'Т'],
  ['ь', 'Ь'],
  ['б', 'Б'],
  ['ю', 'Ю'],
  ['.', ','],
  'ᐃ',
  'Shift',
  'Ctrl',
  'Win',
  'Alt',
  'Space',
  'Alt',
  'Ctrl',
  'ᐊ',
  'ᐁ',
  'ᐅ',
];


const LangEn = [
  ['`', '~'],
  ['1', '!'],
  ['2', '@'],
  ['3', '#'],
  ['4', '$'],
  ['5', '%'],
  ['6', '^'],
  ['7', '&'],
  ['8', '*'],
  ['9', '('],
  ['0', ')'],
  ['-', '_'],
  ['=', '+'],
  'Backspace',
  'Tab',
  ['q', 'Q'],
  ['w', 'W'],
  ['e', 'E'],
  ['r', 'R'],
  ['t', 'T'],
  ['y', 'Y'],
  ['u', 'U'],
  ['i', 'I'],
  ['o', 'O'],
  ['p', 'P'],
  ['[', '{'],
  [']', '}'],
  ['⟍', '/'],
  'Del',
  'Caps Lock',
  ['a', 'A'],
  ['s', 'S'],
  ['d', 'D'],
  ['f', 'F'],
  ['g', 'G'],
  ['h', 'H'],
  ['j', 'J'],
  ['k', 'K'],
  ['l', 'L'],
  [';', ':'],
  ['\'', '"'],
  'Enter',
  'Shift',
  ['z', 'Z'],
  ['x', 'X'],
  ['c', 'C'],
  ['v', 'V'],
  ['b', 'B'],
  ['n', 'N'],
  ['m', 'M'],
  [',', '<'],
  ['.', '>'],
  ['/', '?'],
  'ᐃ',
  'Shift',
  'Ctrl',
  'Win',
  'Alt',
  'Space',
  'Alt',
  'Ctrl',
  'ᐊ',
  'ᐁ',
  'ᐅ',
];

function Backspace() {
  const Text = document.querySelector('.Textarea');
  const Caret1 = Text.selectionStart;
  const Caret2 = Text.selectionEnd;
  const Value = Text.value;
  if (Caret1 === Caret2) {
    Text.value = Value.substring(0, Caret1 - 1) + Value.substring(Caret2, Value.length);
    Text.selectionStart = Caret1 - 1;
    Text.selectionEnd = Caret1 - 1;
  } else {
    Text.value = Value.substring(0, Caret1) + Value.substring(Caret2, Value.length);
    Text.selectionStart = Caret1;
    Text.selectionEnd = Caret1;
  }
}

function Del() {
  const Text = document.querySelector('.Textarea');
  const Caret1 = Text.selectionStart;
  const Caret2 = Text.selectionEnd;
  const Value = Text.value;
  if (Caret1 === Caret2) {
    Text.value = Value.substring(0, Caret1) + Value.substring(Caret2 + 1, Value.length);
    Text.selectionStart = Caret1;
    Text.selectionEnd = Caret1;
  } else {
    Text.value = Value.substring(0, Caret1) + Value.substring(Caret2, Value.length);
    Text.selectionStart = Caret1;
    Text.selectionEnd = Caret1;
  }
}

let Language;
let CapsLock = true;
function Keys(lang, shift) {
  if (shift === !CapsLock) {
    for (let i = 0; i < lang.length; i += 1) {
      if (Array.isArray(lang[i])) {
        const Key = document.createElement('button');
        Key.className = 'keys';
        Key.id = KeyCodes[i];
        const KeyText = lang[i][0];
        Key.innerText = KeyText;
        document.querySelector('.KeyBoard').append(Key);
      } else {
        const Key = document.createElement('button');
        Key.className = 'keys';
        Key.id = KeyCodes[i];
        Key.innerText = lang[i];
        document.querySelector('.KeyBoard').append(Key);
      }
    }
  } else {
    for (let i = 0; i < lang.length; i += 1) {
      if (Array.isArray(lang[i])) {
        const Key = document.createElement('button');
        Key.className = 'keys';
        Key.id = KeyCodes[i];
        const KeyText = lang[i][1];
        Key.innerText = KeyText;
        document.querySelector('.KeyBoard').append(Key);
      } else {
        const Key = document.createElement('button');
        Key.className = 'keys';
        Key.id = KeyCodes[i];
        Key.innerText = lang[i];
        document.querySelector('.KeyBoard').append(Key);
      }
    }
  }
}

Language = Boolean(localStorage.getItem('Language'));
CapsLock = Boolean(localStorage.getItem('CapsLock'));

function KeyWrite() {
  if (CapsLock === true) {
    if (Language === true) {
      Keys(LangEn, CapsLock);
    } else {
      Keys(LangRu, CapsLock);
    }
  } else if (Language === true) {
    Keys(LangEn, !CapsLock);
  } else {
    Keys(LangRu, !CapsLock);
  }
}

function ChangeLang() {
  document.querySelectorAll('.keys').forEach((elem) => {
    elem.remove();
  });
  if (Language === true) {
    Language = false;
    localStorage.setItem('Language', '');
  } else {
    Language = true;
    localStorage.setItem('Language', Language);
  }
  KeyWrite();
}


function ChangeCase() {
  document.querySelectorAll('.keys').forEach((elem) => {
    elem.remove();
  });
  if (CapsLock === true) {
    CapsLock = false;
    localStorage.setItem('CapsLock', '');
  } else {
    CapsLock = true;
    localStorage.setItem('CapsLock', CapsLock);
  }
  KeyWrite();
}

function WriteText(elem) {
  const TextArea = document.querySelector('.Textarea');
  window.event.returnValue = false;
  TextArea.focus();
  if (KeyCodes.includes(elem)) {
    if (elem === 'Tab') TextArea.value += '    ';
    else if (elem === 'CapsLock') {
      ChangeCase();
      document.querySelector('#CapsLock').classList.add('key_pressed');
    } else if (elem === 'ShiftLeft') {
      ChangeCase();
      document.querySelector('#ShiftLeft').classList.add('key_pressed');
    } else if (elem === 'ShiftRight') {
      ChangeCase();
      document.querySelector('#ShiftRight').classList.add('key_pressed');
    } else if (elem === 'Space') TextArea.value += ' ';
    else if (elem === 'Enter') TextArea.value += '\n';
    else if (elem === 'Backspace') {
      Backspace();
    } else if (elem === 'Delete') {
      Del();
    } else if (elem === 'ArrowLeft') {
      TextArea.selectionStart -= 1;
      TextArea.selectionEnd -= 1;
    } else if (elem === 'ArrowRight') {
      TextArea.selectionStart += 1;
      TextArea.selectionEnd = TextArea.selectionStart;
    } else if (elem === 'AltLeft' || elem === 'AltRight' || elem === 'ControlLeft' || elem === 'ControlRight' || elem === 'ArrowUp' || elem === 'ArrowRight' || elem === 'ArrowDown' || elem === 'ArrowLeft' || elem === 'MetaLeft') {
      TextArea.value += '';
    } else TextArea.value += document.querySelector(`#${elem}`).innerText;
  }
}


const KeyPressed = new Set();
function KeyDown(elem) {
  if (KeyCodes.includes(elem.code)) {
    const Down = elem.code;
    const Key = document.querySelector(`#${Down}`);
    Key.classList.add('key_pressed');
    WriteText(Down);
    KeyPressed.add(Down);
    if (KeyPressed.has('AltLeft') && KeyPressed.has('ShiftLeft')) {
      ChangeLang();
    }
  }
}


function KeyUp(elem) {
  if (KeyCodes.includes(elem.code)) {
    const Up = elem.code;
    const Key = document.querySelector(`#${Up}`);
    Key.classList.remove('key_pressed');
    if (Up === 'ShiftLeft' || Up === 'ShiftRight') {
      ChangeCase();
    }
    KeyPressed.delete(Up);
  }
}

function MouseDown(elem) {
  if (elem.target.classList.contains('keys')) {
    WriteText(elem.target.id);
    elem.target.classList.add('key_pressed');
    if (elem.target.id === 'ShiftLeft') {
      if (document.querySelector('#AltLeft').classList.contains('key_pressed')) {
        ChangeLang();
      }
    } else if (elem.target.id === 'AltLeft' && document.querySelector('#ShiftLeft').classList.contains('key_pressed')) {
      ChangeLang();
      ChangeCase();
    }
  }
}
function MouseUp(elem) {
  elem.target.classList.remove('key_pressed');
  if (elem.target.id === 'ShiftLeft' || elem.target.id === 'ShiftRight') {
    ChangeCase();
  }
}


function KeyBoardWrite() {
  const KeyBoard = document.createElement('div');
  KeyBoard.className = 'KeyBoard';
  document.querySelector('.wrapper').append(KeyBoard);
  KeyWrite();
}

function DocumentWrite() {
  const Wrapper = document.createElement('div');
  Wrapper.className = 'wrapper';
  document.body.append(Wrapper);
  const TextArea = document.createElement('textarea');
  TextArea.className = 'Textarea';
  Wrapper.prepend(TextArea);
}
// npx eslint script.js
DocumentWrite();
KeyBoardWrite();
window.addEventListener('keydown', KeyDown);
window.addEventListener('keyup', KeyUp);
window.addEventListener('mousedown', MouseDown);
window.addEventListener('mouseup', MouseUp);
