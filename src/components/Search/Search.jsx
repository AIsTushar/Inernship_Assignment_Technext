import { useEffect, useRef } from "react";

function Search({ search, setSearch }) {
  const inputEl = useRef(null);

  useEffect(
    function () {
      function callBack(e) {
        if (document.activeElement === inputEl.current) {
          return;
        }

        if (e.code === "enter") {
          inputEl.current.focus();
          setSearch("");
        }
      }
      document.addEventListener("keydown", callBack);
      return () => document.addEventListener("keydown", callBack);
    },

    [setSearch]
  );

  return (
    <input
      className="search"
      type="text"
      placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      ref={inputEl}
    />
  );
}

export default Search;
