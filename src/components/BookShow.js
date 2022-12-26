import { useState } from 'react';
import BookEdit from './BookEdit';

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleEditSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  let editContet = <h3>{book.title}</h3>;
  if (showEdit) {
    editContet = <BookEdit book={book} onSubmit={handleEditSubmit} />;
  }

  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        alt="book image"
      />
      {editContet}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={() => onDelete(book.id)}></button>
      </div>
    </div>
  );
};

export default BookShow;
