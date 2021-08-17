import gql from "graphql-tag";

export const ABOUT_QUERY = gql`
  query {
    about {
      info {
        heading
        description
        background {
          url
        }
      }
    }
  }
`;
