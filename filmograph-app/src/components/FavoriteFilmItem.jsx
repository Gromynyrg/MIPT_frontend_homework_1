import React from 'react';

// Получаем пропсы от FavoritesPage
function FavoriteFilmItem({ film, onRemoveFavorite }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
      {/* <div>Текстовое описание компонента FavoriteFilmItem: Элемент списка на странице избранного.</div> */}
      <img src={film.imageUrl} alt={film.title} style={{ width: '50px', height: 'auto', marginRight: '15px' }} />
      <div>
        <h3>{film.title}</h3>
        <p>{film.duration} мин.</p>
      </div>
      <button onClick={() => onRemoveFavorite(film.id)} style={{ marginLeft: 'auto' }}>
        Удалить
      </button>
    </div>
  );
}

export default FavoriteFilmItem;