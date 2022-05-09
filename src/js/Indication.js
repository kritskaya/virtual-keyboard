export default class Indication {
  render() {
    const indication = document.createElement('section');
    indication.className = 'indication';

    const indicationBlock = document.createElement('div');
    indicationBlock.className = 'indication__items';

    const caps = document.createElement('div');
    caps.className = 'indication__item caps-indication';
    const capsName = document.createElement('span');
    capsName.textContent = 'Caps Lock:';
    const capsValue = document.createElement('span');
    capsValue.textContent = 'Off';
    caps.append(capsName, capsValue);
    this.caps = false;

    const lang = document.createElement('div');
    lang.className = 'indication__item lang-indication';
    const langName = document.createElement('span');
    langName.textContent = 'Language:';
    const langValue = document.createElement('span');
    langValue.textContent = 'Eng';
    lang.append(langName, langValue);
    this.lang = 'en';

    indicationBlock.append(caps, lang);

    const description = document.createElement('p');
    description.innerHTML = `Комбинация клавиш для смены языка Ctrl + Shift или клик на индикаторе<br>
    Клавиатура создана в операционной системе Windows`;

    indication.append(indicationBlock, description);

    document.querySelector('main').append(indication);
  }
}
