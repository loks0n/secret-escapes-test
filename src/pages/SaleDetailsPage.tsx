import { useParams } from "react-router-dom";
import SaleDetails from "../components/sale/SaleDetails";

function SaleDetailsPage() {
  const { saleId } = useParams();

  return (
    <main>
      <h1>Sale details</h1>
      {saleId ? <SaleDetails saleId={saleId} /> : <p>Sale not found</p>}
    </main>
  );
}

export default SaleDetailsPage;
