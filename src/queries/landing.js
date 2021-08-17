import gql from "graphql-tag";

export const LANDING_QUERY = gql`
  query Landing {
    landing {
      top {
        background {
          url
        }
        headline
        button
      }
      location {
        address {
          street
          city
          state
          zip
          phone
        }
        background {
          url
        }
        hours {
          day
          open
          close
        }
      }
      details {
        heading
        description
        background {
          url
        }
      }
    }
  }
`;
