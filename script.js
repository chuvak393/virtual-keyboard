const keyCodes = [
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

const langRu = [
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


const langEn = [
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

function backspace() {
  const text = document.querySelector('.textarea');
  const caret1 = text.selectionStart;
  const caret2 = text.selectionEnd;
  const value = text.value;
  if (caret1 === caret2) {
    text.value = value.substring(0, caret1 - 1) + value.substring(caret2, value.length);
    text.selectionStart = caret1 - 1;
    text.selectionEnd = caret1 - 1;
  } else {
    text.value = value.substring(0, caret1) + value.substring(caret2, value.length);
    text.selectionStart = caret1;
    text.selectionEnd = caret1;
  }
}

function del() {
  const text = document.querySelector('.textarea');
  const caret1 = text.selectionStart;
  const caret2 = text.selectionEnd;
  const value = text.value;
  if (caret1 === caret2) {
    text.value = value.substring(0, caret1) + value.substring(caret2 + 1, value.length);
    text.selectionStart = caret1;
    text.selectionEnd = caret1;
  } else {
    text.value = value.substring(0, caret1) + value.substring(caret2, value.length);
    text.selectionStart = caret1;
    text.selectionEnd = caret1;
  }
}

let language;
let capsLock = true;
function keys(lang, shift) {
  if (shift === !capsLock) {
    for (let i = 0; i < lang.length; i += 1) {
      if (Array.isArray(lang[i])) {
        const key = document.createElement('button');
        key.className = 'keys';
        key.id = keyCodes[i];
        const keyText = lang[i][0];
        key.innerText = keyText;
        document.querySelector('.keyBoard').append(key);
      } else {
        const key = document.createElement('button');
        key.className = 'keys';
        key.id = keyCodes[i];
        key.innerText = lang[i];
        document.querySelector('.keyBoard').append(key);
      }
    }
  } else {
    for (let i = 0; i < lang.length; i += 1) {
      if (Array.isArray(lang[i])) {
        const key = document.createElement('button');
        key.className = 'keys';
        key.id = keyCodes[i];
        const keyText = lang[i][1];
        key.innerText = keyText;
        document.querySelector('.keyBoard').append(key);
      } else {
        const key = document.createElement('button');
        key.className = 'keys';
        key.id = keyCodes[i];
        key.innerText = lang[i];
        document.querySelector('.keyBoard').append(key);
      }
    }
  }
}

language = Boolean(localStorage.getItem('language'));
capsLock = Boolean(localStorage.getItem('capsLock'));

function keyWrite() {
  if (capsLock === true) {
    if (language === true) {
      keys(langEn, capsLock);
    } else {
      keys(langRu, capsLock);
    }
  } else if (language === true) {
    keys(langEn, !capsLock);
  } else {
    keys(langRu, !capsLock);
  }
}

function changeLang() {
  document.querySelectorAll('.keys').forEach((elem) => {
    elem.remove();
  });
  if (language === true) {
    language = false;
    localStorage.setItem('language', '');
  } else {
    language = true;
    localStorage.setItem('language', language);
  }
  keyWrite();
}


function changeCase() {
  document.querySelectorAll('.keys').forEach((elem) => {
    elem.remove();
  });
  if (capsLock === true) {
    capsLock = false;
    localStorage.setItem('capsLock', '');
  } else {
    capsLock = true;
    localStorage.setItem('capsLock', capsLock);
  }
  keyWrite();
}

function writeText(elem) {
  const textarea = document.querySelector('.textarea');
  window.event.returnValue = false;
  textarea.focus();
  if (keyCodes.includes(elem)) {
    if (elem === 'Tab') textarea.value += '    ';
    else if (elem === 'Space') textarea.value += ' ';
    else if (elem === 'Enter') textarea.value += '\n';
    else if (elem === 'Backspace') {
      backspace();
    } else if (elem === 'Delete') {
      del();
    } else if (elem === 'ArrowLeft') {
      textarea.selectionStart -= 1;
      textarea.selectionEnd -= 1;
    } else if (elem === 'ArrowRight') {
      textarea.selectionStart += 1;
      textarea.selectionEnd = textarea.selectionStart;
    } else if (elem === 'CapsLock' || elem === 'ShiftLeft' || elem === 'ShiftRight' || elem === 'AltLeft' || elem === 'AltRight' || elem === 'ControlLeft' || elem === 'ControlRight' || elem === 'ArrowUp' || elem === 'ArrowRight' || elem === 'ArrowDown' || elem === 'ArrowLeft' || elem === 'MetaLeft') {
      textarea.value += '';
    } else {
      textarea.value += document.querySelector(`#${elem}`).innerText;
    }
  }
}

let caps = false;
const keyPressed = new Set();
function keyDown(elem) {
  if (keyCodes.includes(elem.code)) {
    const down = elem.code;
    const key = document.querySelector(`#${down}`);
    key.classList.add('key_pressed');
    writeText(down);
    keyPressed.add(down);
    if (keyPressed.has('AltLeft') && keyPressed.has('ShiftLeft')) {
      changeLang();
    }
  }
  if (elem.code === 'CapsLock' && !caps) {
    caps = true;
    changeCase();
    document.querySelector(`#${elem.code}`).classList.add('key_pressed');
  }
  if (elem.code === 'ShiftLeft' && !caps) {
    caps = true;
    changeCase()
    document.querySelector(`#${elem.code}`).classList.add('key_pressed');
  }
  if (elem.code === 'ShiftRight' && !caps) {
    caps = true;
    changeCase()
    document.querySelector(`#${elem.code}`).classList.add('key_pressed');
  }
}


function keyUp(elem) {
  caps = false;
  if (keyCodes.includes(elem.code)) {
    const up = elem.code;
    const key = document.querySelector(`#${up}`);
    key.classList.remove('key_pressed');
    if (up === 'ShiftLeft' || up === 'ShiftRight') {
      changeCase();
    }
    keyPressed.delete(up);
  }
}

function mouseDown(elem) {
  if (elem.target.classList.contains('keys')) {
    writeText(elem.target.id);
    elem.target.classList.add('key_pressed');
    if (elem.target.id === 'ShiftLeft') {
      if (document.querySelector('#AltLeft').classList.contains('key_pressed')) {
        changeLang();
      }
    } else if (elem.target.id === 'AltLeft' && document.querySelector('#ShiftLeft').classList.contains('key_pressed')) {
      changeLang();
      changeCase();
    }
  }
}
function mouseUp(elem) {
  elem.target.classList.remove('key_pressed');
  if (elem.target.id === 'ShiftLeft' || elem.target.id === 'ShiftRight') {
    changeCase();
  }
}


function keyBoardWrite() {
  const keyBoard = document.createElement('div');
  keyBoard.className = 'keyBoard';
  document.querySelector('.wrapper').append(keyBoard);
  keyWrite();
}

function documentWrite() {
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  document.body.append(wrapper);
  const textarea = document.createElement('textarea');
  textarea.className = 'textarea';
  wrapper.prepend(textarea);
  const description = document.createElement('div');
  description.className = 'description';
  wrapper.append(description);
  const descriptionText = document.createElement('p');
  descriptionText.innerHTML = 'OS: Windows <br> To change the language: alt+shift';
  description.append(descriptionText);
}


documentWrite();
keyBoardWrite();
window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);
window.addEventListener('mousedown', mouseDown);
window.addEventListener('mouseup', mouseUp);
