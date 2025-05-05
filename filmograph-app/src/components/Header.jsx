import React from 'react';

// Получаем функцию onNavigate через пропсы (используем деструктуризацию)
function Header({ onNavigate }) {
  return (
    <header> {/* Заменили div на header для семантики */}
       {/* <div>Текстовое описание компонента Header: Шапка сайта с навигацией.</div> */}
      <nav>
        {/* Используем кнопки и вызываем onNavigate с нужным значением */}
        <button onClick={() => onNavigate('home')}>Все фильмы</button>
        <button onClick={() => onNavigate('favorites')}>Избранное</button>
        <button onClick={() => onNavigate('add')}>Добавить фильм</button>
      </nav>
    </header>
  );
}

export default Header;