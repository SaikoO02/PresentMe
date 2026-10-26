import facebookIcon from '../../img/facebook.svg';
import telegramIcon from '../../img/telegram.svg';
import mailIcon from '../../img/mail.svg';
import wordmark from '../../img/wordmark.svg';
import { links } from './Header';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <div>
            <h2>Навигация</h2>
            <nav aria-label="Навигация в подвале">
              {links.map((text) => <span key={text}>{text}</span>)}
            </nav>
          </div>
          <div className="footer-information">
            <h2>Информация</h2>
            <p>Контакты</p>
            <p>Политика<br />конфиденциальности</p>
            <p>Условия<br />использования</p>
          </div>
          <div className="footer-socials">
            <h2>Соц.сети</h2>
            <div className="social-icons" aria-label="Facebook, Telegram, электронная почта">
              <img src={facebookIcon} width="28" height="32" alt="" />
              <img src={telegramIcon} width="32" height="32" alt="" />
              <img src={mailIcon} width="32" height="32" alt="" />
            </div>
          </div>
        </div>
        <img className="footer-logo" src={wordmark} alt="Present.me" />
        <div className="footer-bottom">
          <p>© 2026 Present.me</p>
          <p>AI-сервис для создания резюме и портфолио</p>
        </div>
      </div>
    </footer>
  );
}
