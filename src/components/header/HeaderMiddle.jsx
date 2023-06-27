import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/cartContext";
import { books } from "../../data/books";
import searchResult from "../../pages/searchResult/searchResult";
const HeaderMiddle = () => {
  const { cartItemsLength } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="header-middle">
      <Link to="/" className="header-middle-logo">
        <b>Book</b>
        <i className="bi bi-book"></i>
        <b>Store</b>
      </Link>
      <div className="header-middle-search-box">
        <input
          className="header-middle-search-input"
          type="search"
          placeholder="Search in store....."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <i className="bi bi-search"></i>
      </div>
      <Link to="/cart" className="header-middle-cart-wrapper">
        {cartItemsLength > 0 && (
          <b className="cart-notifications">{cartItemsLength}</b>
        )}
        <i className="bi bi-cart2"></i>
      </Link>
    </div>
    

          
    
  );
};

export default HeaderMiddle;
