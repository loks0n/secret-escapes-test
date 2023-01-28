import { graphql } from "../../__generated__";

const SALE_DETAILS_QUERY = graphql(/* GraphQL */ `
  query SaleDetails($saleId: String!) {
    sale(saleId: $saleId) {
      editorial {
        title
        destinationName
      }
      prices {
        leadRate {
          forDisplay
        }
      }
      photos {
        url
        caption
      }
    }
  }
`);

export default SALE_DETAILS_QUERY;
