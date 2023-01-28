import { Link } from "react-router-dom";
import styles from "./SearchResultsCard.module.css";

type Props = {
  id?: string | null;
  title?: string | null;
  destinationName?: string | null;
  photo?: { url?: string | null; caption?: string | null };
};

function SearchResultCard({ id, title, destinationName, photo }: Props) {
  return (
    <Link to={`/sale/${id ?? undefined}`}>
      <article className={styles.card}>
        {photo && photo.url && (
          <figure>
            <img src={photo.url} alt={photo.caption ?? undefined} />
          </figure>
        )}
        <hgroup>
          {title && <h5>{title}</h5>}
          {destinationName && <h6>{destinationName}</h6>}
        </hgroup>
      </article>
    </Link>
  );
}

export default SearchResultCard;
