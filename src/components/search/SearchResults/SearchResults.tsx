import { useQuery } from "@apollo/client";
import SearchResultCard from "./SearchResultsCard/SearchResultsCard";
import styles from "./SearchResults.module.css";
import SALE_SEARCH_QUERY from "./SearchResultsQuery";

type Props = { query?: string };

function SearchResults({ query = "" }: Props) {
  const { loading, error, data } = useQuery(SALE_SEARCH_QUERY, {
    variables: { query },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Whoops! Something went wrong.</p>;

  return (
    <section>
      <p>Total results: {data?.saleSearch?.resultCount ?? 0}</p>
      <ul className={styles.resultsGrid}>
        {data?.saleSearch?.sales?.map((sale) => {
          const leadPhoto = sale?.photos && sale.photos[0];
          const displayPhoto = leadPhoto
            ? {
                url: leadPhoto.url,
                caption: leadPhoto.caption,
              }
            : undefined;

          return (
            <li>
              <SearchResultCard
                id={sale?.id}
                title={sale?.editorial?.title}
                destinationName={sale?.editorial?.destinationName}
                photo={displayPhoto}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default SearchResults;
