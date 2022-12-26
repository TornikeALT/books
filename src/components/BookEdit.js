import { useState } from 'react';

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);

  const handleInputChange = e => {
    setTitle(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit(book.id, title);
  };

  return (
    <div>
      <form className="book-edit" onSubmit={handleFormSubmit}>
        <label>Title</label>
        <input
          type="text"
          className="input"
          value={title}
          onChange={handleInputChange}
        />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
};

export default BookEdit;
