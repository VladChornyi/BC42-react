import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "../../components/Button";

export const SearchPosts = () => {
  const [params, setParams] = useSearchParams();
  const searchPrams = Object.fromEntries([...params]);
  const { search: savedSearch } = searchPrams;
  const [search, setSearch] = useState(savedSearch ?? "");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = () => {
    setParams({ ...searchPrams, search });
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Type to search..."
        value={search}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Search</Button>
    </div>
  );
};
