import "./Sort.css";

function Sort({ handleSort }) {
  function handleChange(value) {
    handleSort(value);
  }
  return (
    <div className="sort">
      <div className="styled-select">
        <select value={""} onChange={(e) => handleChange(e.target.value)}>
          <option value="">Sort</option>
          <option default value="name">
            Sort by name
          </option>
          <option value="email">Sort by email</option>
          <option value="company">Sort by company</option>
        </select>
        <span className="fa fa-sort-desc"></span>
      </div>
    </div>
  );
}

export default Sort;
