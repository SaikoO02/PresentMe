import userIcon from '../../img/User.svg';

export const links = ['О нас', 'Возможности', 'Опыт', 'Тариф', 'Отзывы'];

export default function Header() {
  return (
    <header className="header">
      <a className="logo" href="#main-content">Present.me</a>
      <nav className="nav" aria-label="Основная навигация">
        {links.map((text) => <span key={text}>{text}</span>)}
      </nav>
      <button className="user-button" type="button" aria-label="Личный кабинет" disabled>
        <img src={userIcon} width="28" height="32" alt="" />
      </button>
    </header>
  );
}
