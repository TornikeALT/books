import { useState } from 'react';

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('');

  const handleInputChange = e => {
    setTitle(e.target.value);
  };
  const handleSubmitForm = e => {
    e.preventDefault();
    onCreate(title);
    setTitle('');
  };

  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmitForm}>
        <label>Enter Title:</label>
        <input
          className="input"
          type="text"
          value={title}
          onChange={handleInputChange}
        />
        <button className="button">Create </button>
      </form>
    </div>
  );
};

export default BookCreate;
