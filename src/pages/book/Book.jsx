import { useParams } from "react-router-dom";
import { books } from "../../data/books";
import Rating from "../../components/book-slider/Rating";
import { useContext, useState } from "react";
import CartContext from "../../context/cartContext";

const Book = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const book = books.find((b) => b.id === +id);
  const [qty, setQty] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="book">
      <div className="book-content">
        <img src={`/books/${book.image}`} alt={book.title} className="book-content-img" />
        <div className="book-content-info">
          <h1 className="book-title">{book.title}</h1>
          <div className="book-author">
            by <span>{book.author}</span> (Author)
          </div>
          <Rating rating={book.rating} reviews={book.reviews} />
          <div className="book-add-to-cart">
            <input
              min="1"
              max="100"
              type="number"
              className="book-add-to-cart-input"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
            <button
              onClick={() => addToCart({ ...book, quantity: qty })}
              className="book-add-to-cart-btn"
            >
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <p className="book-description">
        A book description is a short summary of a book's story or content that is designed to
        “hook” a reader and lead to a sale. Typically, the book's description conveys important
        information about its topic or focus (in nonfiction) or the plot and tone (for a novel or
        any other piece of fiction).
      </p>

      <div className="book-icons">
        <div className="book-icon">
          <small>Print Length</small>
          <i className="bi bi-file-earmark-break"></i>
          <b>{book.printLength} Pages</b>
        </div>
        <div className="book-icon">
          <small>Language</small>
          <i className="bi bi-globe"></i>
          <b>{book.language}</b>
        </div>
        <div className="book-icon">
          <small>Publication Date</small>
          <i className="bi bi-calendar3"></i>
          <b>{book.PublicationDate}</b>
        </div>
      </div>

      <div className="book-search-wrapper">
        <input
          value={searchQuery}
          onChange={handleSearchChange}
          type="search"
          placeholder="Search in books"
        />
      </div>

      <section className="search-results">
        <h2>Search Results:</h2>
        {filteredBooks.length > 0 ? (
          <ul>
            {filteredBooks.map((book) => (
              <li key={book.id}>{book.title}</li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </section>
    </div>
  );
};

export default Book;
