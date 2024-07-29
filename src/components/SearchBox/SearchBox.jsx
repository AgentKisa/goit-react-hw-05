import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const queryParam = params.get("q");
    if (queryParam) {
      setQuery(queryParam);
      onSearch(queryParam);
    }
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Empty field, enter text!");
      return;
    }
    onSearch(query);
    setParams({ q: query });
  };

  return (
    <>
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
    </>
  );
};

export default SearchBox;
