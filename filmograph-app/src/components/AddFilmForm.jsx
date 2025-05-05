import React, { useState } from 'react';

// Получаем пропс onAddFilm от AddFilmPage
function AddFilmForm({ onAddFilm }) {
  // Используем useState для каждого поля формы
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState(''); // Пока один жанр через radio/select
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  // Для файла нужна отдельная логика, пока пропустим загрузку
  // const [imageFile, setImageFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault(); // Предотвращаем стандартную отправку формы
    if (!title || !genre || !duration || !description) {
        alert('Пожалуйста, заполните все поля');
        return;
    }
    // Вызываем функцию onAddFilm, переданную из App, с данными из формы
    onAddFilm({
      title,
      genre,
      duration: parseInt(duration), // Преобразуем строку в число
      description,
      imageUrl: '/images/placeholder.jpg' // Заглушка для изображения
    });
    // Очистка формы (необязательно, т.к. App переключит страницу)
    // setTitle('');
    // setGenre('');
    // setDuration('');
    // setDescription('');
  };

  // Определим возможные жанры для выбора
  const genres = ['Боевик', 'Комедия', 'Драма', 'Триллер', 'Фантастика'];

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '20px auto', padding: '20px', border: '1px solid #ccc' }}>
      {/* <div>Текстовое описание компонента AddFilmForm: Форма для ввода данных нового фильма.</div> */}
      <div style={{ marginBottom: '10px' }}>
        <label>Название фильма: </label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Жанр: </label>
        {/* Пример с radio buttons */}
         {genres.map(g => (
            <label key={g} style={{ marginRight: '10px' }}>
                <input
                    type="radio"
                    name="genre"
                    value={g}
                    checked={genre === g}
                    onChange={(e) => setGenre(e.target.value)}
                    required
                /> {g}
            </label>
         ))}
        {/* Или можно использовать select:
        <select value={genre} onChange={(e) => setGenre(e.target.value)} required>
          <option value="">Выберите жанр</option>
          {genres.map(g => <option key={g} value={g}>{g}</option>)}
        </select> */}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Длительность (мин): </label>
        <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Описание: </label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      {/* Поле для загрузки файла пока пропустим */}
      {/* <div style={{ marginBottom: '10px' }}>
        <label>Загрузить фото: </label>
        <input type="file" onChange={(e) => setImageFile(e.target.files[0])} />
      </div> */}
      <button type="submit">Добавить фильм</button>
    </form>
  );
}

export default AddFilmForm;