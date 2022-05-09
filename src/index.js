import Indication from './js/Indication';
import Input from './js/Input';
import Keyboard from './js/Keyboard';

window.onload = () => {
  const main = document.createElement('main');
  main.className = 'wrapper';
  document.body.prepend(main);

  const input = new Input();
  input.render();

  const keyboard = new Keyboard(input);
  keyboard.render();

  const indication = new Indication();
  indication.render();

  document.querySelector('.input').addEventListener('click', (event) => {
    input.cursorPos = event.target.selectionStart;
  });

  document.addEventListener('keydown', (event) => {
    keyboard.keyPressListener(event);
  });

  document.addEventListener('keyup', (event) => {
    keyboard.keyPressListener(event);
  });

  document.querySelector('.keyboard').addEventListener('mousedown', (event) => {
    if (event.target.closest('.key')) {
      keyboard.keyClickHandler(event, event.target.closest('.key'));
    }
  });

  document.querySelector('.keyboard').addEventListener('mouseup', (event) => {
    if (event.target.closest('.key')) {
      keyboard.keyClickHandler(event, event.target.closest('.key'));
      document.querySelector('.input').focus();
    }
  });

  document.querySelector('.lang-indication span:last-child').addEventListener('click', () => {
    keyboard.changeLanguage();
    keyboard.capsClickHandler();
    keyboard.capsClickHandler();
  });
};
