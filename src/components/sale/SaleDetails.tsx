import { useQuery } from "@apollo/client";
import SALE_DETAILS_QUERY from "./SaleDetailsQuery";
import styles from "./SaleDetails.module.css";

type Props = { saleId: string };

function SaleDetails({ saleId }: Props) {
  const { loading, error, data } = useQuery(SALE_DETAILS_QUERY, {
    variables: { saleId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Whoops! Something went wrong.</p>;

  const leadPhoto = data?.sale?.photos && data.sale.photos[0];

  return (
    <section className={styles.responsiveColumnDetails}>
      {leadPhoto && leadPhoto.url && (
        <figure>
          <img src={leadPhoto.url} alt={leadPhoto.caption ?? undefined} />
        </figure>
      )}
      <article>
        <hgroup>
          <h3>{data?.sale?.editorial?.title}</h3>
          <h4>{data?.sale?.editorial?.destinationName}</h4>
        </hgroup>
        <small>Price: {data?.sale?.prices?.leadRate?.forDisplay}</small>
      </article>
    </section>
  );
}

export default SaleDetails;
