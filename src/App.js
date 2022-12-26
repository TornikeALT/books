import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const handleBookEdit = (id, newTitle) => {
    const updatedEditBooks = books.map(book => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedEditBooks);
  };

  const handleBookCreate = title => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };

  const handleBookDelete = id => {
    const updateBooks = books.filter(book => {
      return book.id !== id;
    });
    setBooks(updateBooks);
  };

  return (
    <div className="app">
      <h1>My Books</h1>
      <BookList
        books={books}
        onDelete={handleBookDelete}
        onEdit={handleBookEdit}
      />
      <BookCreate onCreate={handleBookCreate} />
    </div>
  );
}

export default App;
