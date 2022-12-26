import BookShow from './BookShow';

const BookList = ({ books, onDelete, onEdit }) => {
  const renderedBooksList = books.map(book => {
    return (
      <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onEdit} />
    );
  });

  return <div className="book-list">{renderedBooksList}</div>;
};

export default BookList;
