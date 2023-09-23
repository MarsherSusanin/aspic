import "./style.css";
import search from "../../../assets/img/search.svg";
const SearchInput = (props) => {
  return (
    <>
      <div className="input-search">
        <input
          className="input-search__input"
          type="text"
          placeholder={props.text}
        />
        <button className="btn-search">
          <img src={search} alt="search" />
        </button>
      </div>
    </>
  );
};
export { SearchInput };
