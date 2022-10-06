import React from "react";
import debounce from "lodash.debounce";
import { SearchContext } from "../../App";

import styles from "./Search.module.scss";

function Search() {
  const [value, setValue] = React.useState("");
  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    setValue('');
    setSearchValue('')
    inputRef.current.focus();
  };

  const updateSearchvalue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 500),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchvalue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.searchIcon}
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 487.95 487.95"
      >
        <g>
          <g>
            <path
              d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1
			c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4
			c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z"
            />
          </g>
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск..."
      />
      {value && (
        <svg
          onClick={() => onClickClear()}
          className={styles.closeIcon}
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g data-name="Layer 2">
            <g data-name="close">
              <rect
                width="24"
                height="24"
                transform="rotate(180 12 12)"
                opacity="0"
              />
              <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
            </g>
          </g>
        </svg>
      )}
    </div>
  );
}

export default Search;
