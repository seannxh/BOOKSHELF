import React, { useState } from "react";

function Bookshelf() {

  const [formData, setFormData] = useState({
    Title: "",
    Author: ""
  });

  const [books, setBooks] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setBooks((prevBooks) => [...prevBooks, formData]);
    setFormData({
      Title: "",
      Author: ""
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='Title'>Book Name: </label> <br />
        <input
          type="text"
          name="Title"
          value={formData.Title}
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor='Author'>Author: </label> <br />
        <input
          type="text"
          name="Author"
          value={formData.Author}
          onChange={handleInputChange}
        />
        <br /> <br />

        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>Bookshelf</h2>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <strong>{book.Title}</strong> <br />
              <em>By: {book.Author}</em>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Bookshelf;
