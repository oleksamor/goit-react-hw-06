import react from "react";

import s from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  return (
    <div>
      <p className={s.lable}>Find contacts by name</p>
      <input
        type="text"
        className={s.input}
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      ></input>
    </div>
  );
};

export default SearchBox;
