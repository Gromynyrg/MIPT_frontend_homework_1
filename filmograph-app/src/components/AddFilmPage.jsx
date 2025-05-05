import React from 'react';
import AddFilmForm from './AddFilmForm';

// Получаем пропс onAddFilm от App
function AddFilmPage({ onAddFilm }) {
  return (
    <div>
      {/* <div>Текстовое описание компонента AddFilmPage: Страница добавления нового фильма.</div> */}
      <h1>Добавить фильм</h1>
      {/* Передаем onAddFilm дальше в форму */}
      <AddFilmForm onAddFilm={onAddFilm} />
    </div>
  );
}

export default AddFilmPage;