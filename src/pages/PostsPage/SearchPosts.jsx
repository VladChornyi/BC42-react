import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { selectCounter } from "../../redux/counter/counter-selector";

import { openModalAction } from "../../redux/modal/modal-slice";

export const SearchPosts = () => {
  const [params, setParams] = useSearchParams();
  const searchPrams = Object.fromEntries([...params]);
  const { search: savedSearch } = searchPrams;
  const [search, setSearch] = useState(savedSearch ?? "");
  const dispatch = useDispatch();

  const counter = useSelector(selectCounter);

  const handleChange = (event) => {
    setSearch(event.target.value);
    dispatch(openModalAction());
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
