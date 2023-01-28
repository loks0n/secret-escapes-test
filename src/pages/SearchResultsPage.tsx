import { useLocation } from "react-router-dom";
import SearchResults from "../components/search/SearchResults/SearchResults";

function SearchResultsPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  return (
    <main>
      <h1>Search results</h1>
      <SearchResults query={searchParams.get("query") ?? ""} />
    </main>
  );
}

export default SearchResultsPage;
