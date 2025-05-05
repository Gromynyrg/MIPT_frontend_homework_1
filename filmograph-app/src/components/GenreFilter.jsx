import React from 'react';

// Получаем пропсы от HomePage
function GenreFilter({ genres, selectedGenres, onGenreChange }) {

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      // Добавить жанр в список выбранных
      onGenreChange([...selectedGenres, value]);
    } else {
      // Удалить жанр из списка выбранных
      onGenreChange(selectedGenres.filter(genre => genre !== value));
    }
  };

  return (
    <div>
      {/* <div>Текстовое описание компонента GenreFilter: Чекбоксы для фильтрации по жанрам.</div> */}
      <span>Фильтровать по жанру: </span>
      {genres.map(genre => (
        <label key={genre} style={{ marginRight: '10px' }}>
          <input
            type="checkbox"
            value={genre}
            checked={selectedGenres.includes(genre)}
            onChange={handleCheckboxChange}
          />
          {genre}
        </label>
      ))}
    </div>
  );
}

export default GenreFilter;