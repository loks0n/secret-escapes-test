import { graphql } from "../../../__generated__";

const SALE_SEARCH_QUERY = graphql(/* GraphQL */ `
  query SaleSearch($query: String) {
    saleSearch(query: $query, travelTypes: "HOTEL_ONLY") {
      resultCount
      sales(limit: 10, offset: 0) {
        id
        editorial {
          title
          destinationName
        }
        photos {
          url
          caption
        }
      }
    }
  }
`);

export default SALE_SEARCH_QUERY;
