import React from 'react';

// Получаем пропсы от MovieList
function FilmCard({ film, isFavorite, onToggleFavorite }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
      {/* <div>Текстовое описание компонента FilmCard: Карточка одного фильма в списке.</div> */}
      <img src={film.imageUrl} alt={film.title} style={{ width: '100%', height: 'auto' }} />
      <h3>{film.title}</h3>
      <p>{film.genre}</p>
      <p>{film.duration} мин.</p>
      <button onClick={() => onToggleFavorite(film.id)}>
        {isFavorite ? '★ Убрать из избранного' : '☆ Добавить в избранное'}
      </button>
    </div>
  );
}

export default FilmCard;