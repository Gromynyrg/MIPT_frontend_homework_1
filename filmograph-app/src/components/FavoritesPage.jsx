import React from 'react';
import FavoriteFilmItem from './FavoriteFilmItem';

// Получаем пропсы от App
function FavoritesPage({ favoriteFilms, onRemoveFavorite }) {
  return (
    <div>
      {/* <div>Текстовое описание компонента FavoritesPage: Страница с избранными фильмами.</div> */}
      <h1>Избранное</h1>
      {favoriteFilms.length > 0 ? (
        favoriteFilms.map(film => (
          <FavoriteFilmItem
            key={film.id}
            film={film}
            onRemoveFavorite={onRemoveFavorite} // Передаем функцию дальше
          />
        ))
      ) : (
        <p>В избранном пока ничего нет.</p>
      )}
    </div>
  );
}

export default FavoritesPage;