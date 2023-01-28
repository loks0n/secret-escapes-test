import styles from "./SearchForm.module.css";

function SearchForm() {
  return (
    <form action="search" method="GET" className={styles.searchForm}>
      <input
        type="text"
        name="query"
        placeholder="Search for a hotel or destination..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
