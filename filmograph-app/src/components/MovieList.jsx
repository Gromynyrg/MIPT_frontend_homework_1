import React from 'react';
import FilmCard from './FilmCard';

// Получаем пропсы от HomePage
function MovieList({ films, favoriteIds, onToggleFavorite }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}> {/* Простые стили для сетки */}
      {/* <div>Текстовое описание компонента MovieList: Отображает список или сетку фильмов.</div> */}
      {films.length > 0 ? (
        films.map(film => (
          <FilmCard
            key={film.id} // Уникальный ключ обязателен при рендере списков
            film={film} // Передаем весь объект фильма
            isFavorite={favoriteIds.includes(film.id)} // Передаем статус избранного
            onToggleFavorite={onToggleFavorite} // Передаем функцию для кнопки "звездочка"
          />
        ))
      ) : (
        <p>Фильмы не найдены.</p> // Сообщение, если список пуст
      )}
    </div>
  );
}

export default MovieList;