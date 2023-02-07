import PropTypes from "prop-types";

const GenresSelect = ({ list, onChange, genre }) => {
  return (
    <>
      <h2>Filer your films</h2>
      <select name="ganre" value={genre} onChange={onChange}>
        <option value="All">All</option>
        {list.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

GenresSelect.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};

export default GenresSelect;
