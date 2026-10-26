export default function Menu() {
  return (
    <aside className="menu">
      <nav aria-label="Личный кабинет">
        <button className="menu-button" type="button" disabled>Информация обо мне</button>
        <button className="menu-button active" type="button" aria-current="page" disabled>Моя карта</button>
        <button className="menu-button" type="button" disabled>Создать резюме</button>
        <button className="menu-button" type="button" disabled>Создать портфолио</button>
        <button className="menu-button" type="button" disabled>Продолжить работу</button>
      </nav>
      <button className="exit-link" type="button" disabled>
        <span aria-hidden="true">←</span> Выйти
      </button>
    </aside>
  );
}
