import React from 'react';
import './Header.css'; 
import logo from '../../assets/logo.png'; // Импортируем изображение

const Header = () => {
    return (
      <header className="header-container">
        <nav className="nav-container">
          <div className="nav-inner-container">
            <ul>
              <li><a href="#">Главная</a></li>
              <li><a href="#">О нас</a></li>
              <li><a href="#">Контакты</a></li>
              <li className="logo-container">
                <img src={logo} alt="лого" className="logo" />
              </li>
              <li><a href="#">Программа</a></li>
              <li><a href="#">Галерея</a></li>
              <li><a href="#">Отзывы</a></li>
            </ul>
          </div>
        </nav>
      </header>
    );
};

export default Header;
