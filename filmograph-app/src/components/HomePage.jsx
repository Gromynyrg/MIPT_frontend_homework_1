import React, { useState } from 'react'; // Добавим useState для фильтра
import GenreFilter from './GenreFilter';
import MovieList from './MovieList';

// Получаем пропсы от App
function HomePage({ films, favoriteIds, onToggleFavorite }) {
  // Состояние для выбранных жанров
  const [selectedGenres, setSelectedGenres] = useState([]);

  // Логика фильтрации фильмов по жанру
  const filteredFilms = selectedGenres.length === 0
    ? films // Если жанры не выбраны, показываем все
    : films.filter(film => selectedGenres.includes(film.genre));

  // Получаем список всех уникальных жанров для фильтра
  const allGenres = [...new Set(films.map(film => film.genre))];

  return (
    <div>
      {/* <div>Текстовое описание компонента HomePage: Главная страница со списком фильмов.</div> */}
      <h1>Фильмы</h1>
      <GenreFilter
        genres={allGenres}
        selectedGenres={selectedGenres}
        onGenreChange={setSelectedGenres} // Передаем функцию обновления состояния фильтра
      />
      <MovieList
        films={filteredFilms} // Передаем отфильтрованные фильмы
        favoriteIds={favoriteIds}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}

export default HomePage;