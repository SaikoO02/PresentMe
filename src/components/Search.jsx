import searchIcon from '../../img/search.svg';
import { useRef, useState } from 'react';
import { cards } from '../data/cards.mjs';
import Card from './Card';
import Button from './Button';

export default function Search() {
  const [text, setText] = useState('');
  const input = useRef(null);
  // Приводим слова к одному виду: маленькие буквы, без лишних пробелов.
  function prepareText(value) {
    return value.toLowerCase().replaceAll('ё', 'е').trim();
  }

  const words = prepareText(text).split(/\s+/);
  const hasText = text.trim() !== '';

  // Проверяем каждое слово в названии и тексте карточки.
  const foundCards = cards.filter((card) => {
    const cardText = prepareText(card.title + ' ' + card.text);

    for (const word of words) {
      if (!cardText.includes(word)) {
        return false;
      }
    }

    return true;
  });

  function changeText(event) {
    setText(event.target.value);
  }

  function stopSubmit(event) {
    // Не перезагружаем страницу при нажатии Enter.
    event.preventDefault();
  }

  function clearSearch() {
    setText('');
    input.current.focus();
  }

  return (
    <>
      <h1>Моя карта</h1>
      <p className="intro">Всё важное о твоём опыте<br />в одном месте</p>
      <form className="search" role="search" onSubmit={stopSubmit}>
        <label className="visually-hidden" htmlFor="search-input">Поиск по карте опыта</label>
        <input ref={input} id="search-input" type="search" placeholder="Поиск" value={text}
          onChange={changeText} autoComplete="off" aria-controls="results" />
        {text && <button className="clear-search" type="button" onClick={clearSearch} aria-label="Очистить поиск">×</button>}
        <button className="search-button" type="submit" aria-label="Найти">
          <img src={searchIcon} width="25" height="25" alt="" />
        </button>
      </form>
      <p className={hasText ? 'search-status' : 'visually-hidden'} role="status" aria-live="polite" aria-atomic="true">
        Найдено: {foundCards.length}
      </p>
      <div id="results" className={hasText ? 'cards filtered' : 'cards'}>
        {foundCards.map((card) => <Card key={card.id} card={card} />)}
        {foundCards.length === 0 && (
          <div className="empty-state">
            <h2>Ничего не найдено</h2>
            <p>Попробуй другое слово, например «дизайн» или «Figma».</p>
            <Button text="Показать всю карту" onClick={clearSearch} />
          </div>
        )}
      </div>
    </>
  );
}
