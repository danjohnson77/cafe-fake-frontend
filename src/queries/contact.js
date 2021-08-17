import gql from "graphql-tag";

export const CONTACT_QUERY = gql`
  query {
    contact {
      heading
      background {
        url
      }
    }
  }
`;
