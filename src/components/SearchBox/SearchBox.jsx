import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [params, setParams] = useSearchParams();
  const value = params.get("owner") ?? "";

  const handleChange = (e, newFilter) => {
    setQuery(e.target.value);
    params.set("owner", newFilter);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      return;
    }
    onSearch(query);
    setParams({ owner: query });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchBox;
