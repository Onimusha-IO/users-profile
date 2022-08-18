import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/slice/userSlice";

import search from "../../img/search.png";
import x from "../../img/x.png";

import "./Search.css";

const Search = () => {
  const dispatch = useDispatch();

  const filter = useSelector((state: any) => {
    return state.userSlice.filter;
  });

  return (
    <div className="search">
      <input
        type="text"
        value={filter}
        placeholder="Search"
        onChange={(e) => {
          console.log("input: ", e.target.value);
          dispatch(setFilter(e.target.value));
        }}
      />
      <div className="icon">
        {filter !== "" ? (
          <img
            className="clear"
            src={x}
            alt="clear search"
            onClick={() => {
              dispatch(setFilter(""));
            }}
          />
        ) : (
          <img className="search" src={search} alt="search icon" />
        )}
      </div>
    </div>
  );
};

export default Search;
