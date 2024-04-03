import { useState, useEffect } from "react";
import axios from "axios";

const useFetchBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get("https://dev.iqrakitab.net/api/books");
      setBooks(response.data.data);
      setLoading(false);
    };

    fetchBooks();
  }, []);

  return { books, loading };
};

export default useFetchBooks;
