// SearchBox.jsx
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const SearchBox = ({ onSearch }) => {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState(params.get("query") || "");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Empty field, enter text!");
      return;
    }
    setParams({ query });
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Toaster />
      <input
        type="text"
        value={query}
        placeholder="Search movies..."
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
