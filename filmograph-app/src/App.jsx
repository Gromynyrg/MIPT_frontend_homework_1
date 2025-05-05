import React, { useState } from 'react'; // Импортируем useState
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import FavoritesPage from './components/FavoritesPage';
import AddFilmPage from './components/AddFilmPage';
import FilmDetailPage from './components/FilmDetailPage'; // Пока не будем реализовывать детальную страницу
import { initialFilms } from './mockData'; // Импортируем наши данные

function App() {
  // === Состояние ===
  // Состояние для хранения списка всех фильмов
  const [films, setFilms] = useState(initialFilms);
  // Состояние для хранения ID избранных фильмов (или можно хранить полные объекты)
  const [favoriteIds, setFavoriteIds] = useState(
      initialFilms.filter(f => f.isFavorite).map(f => f.id)
  );
  // Состояние для определения текущей отображаемой страницы
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'favorites', 'add'

  // === Логика ===
  // Функция для переключения статуса избранного
  const handleToggleFavorite = (filmId) => {
    setFavoriteIds(prevIds => {
      if (prevIds.includes(filmId)) {
        // Удаляем из избранного
        return prevIds.filter(id => id !== filmId);
      } else {
        // Добавляем в избранное
        return [...prevIds, filmId];
      }
    });
    // Можно также обновить isFavorite в основном списке films, если нужно
    // setFilms(prevFilms => prevFilms.map(f => f.id === filmId ? {...f, isFavorite: !f.isFavorite} : f));
  };

  // Функция для добавления нового фильма (будет передана в AddFilmPage)
  const handleAddFilm = (newFilmData) => {
      // Генерируем простой ID (в реальном приложении ID должен быть надежнее)
      const newFilm = {
          ...newFilmData,
          id: Date.now(), // Простой способ получить уникальный ID для примера
          isFavorite: false,
          // imageUrl нужно будет обработать отдельно, если есть загрузка файла
      };
      setFilms(prevFilms => [...prevFilms, newFilm]);
      setCurrentPage('home'); // Переключаемся на главную после добавления
      alert('Фильм добавлен!'); // Простое уведомление
  };

  // Функция для удаления фильма (например, из избранного или со страницы деталей)
  const handleRemoveFavorite = (filmId) => {
      setFavoriteIds(prevIds => prevIds.filter(id => id !== filmId));
      // Если нужно полное удаление фильма из приложения:
      // setFilms(prevFilms => prevFilms.filter(f => f.id !== filmId));
  };


  // Получаем список избранных фильмов на основе ID
  const favoriteFilms = films.filter(film => favoriteIds.includes(film.id));

  // === Рендеринг страницы ===
  const renderPage = () => {
    switch (currentPage) {
      case 'favorites':
        return <FavoritesPage
                 favoriteFilms={favoriteFilms}
                 onRemoveFavorite={handleRemoveFavorite} // Передаем функцию удаления
               />;
      case 'add':
        return <AddFilmPage onAddFilm={handleAddFilm} />; // Передаем функцию добавления
      case 'home':
      default:
        return <HomePage
                 films={films} // Передаем все фильмы
                 favoriteIds={favoriteIds} // Передаем ID избранных
                 onToggleFavorite={handleToggleFavorite} // Передаем функцию переключения избранного
               />;
    }
  };

  return (
    <div>
      {/* Передаем функцию setCurrentPage в Header через пропс onNavigate */}
      <Header onNavigate={setCurrentPage} />
      <main>
        {renderPage()} {/* Отображаем текущую страницу */}
      </main>
      <Footer />
    </div>
  );
}

export default App;