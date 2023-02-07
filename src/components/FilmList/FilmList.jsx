import PropTypes from "prop-types";

const FilmList = ({ filmList = [], onDeleteFilm }) => {
  return (
    <ul>
      {filmList.map((item) => (
        <li key={item.id}>
          <img width="150" src={item.url} alt={item.filmName} />
          <h3>{item.filmName} </h3>
          <p>Ganre: {item.ganre} </p>
          <p>Views: {item.views} </p>
          <button
            onClick={() => onDeleteFilm(item.id)}
            className="btn"
            type="button"
          >
            Delete me
          </button>
        </li>
      ))}
    </ul>
  );
};

FilmList.defaultProps = {
  filmList: [],
};

// FilmList.propTypes = {
//   onDeleteFilm: PropTypes.func.isRequired,
//   filmList: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       filmName: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//       ganre: PropTypes.string.isRequired,
//       views: PropTypes.string.isRequired,
//     })
//   ),
// };

export default FilmList;
