import { gql } from "@apollo/client";

// Query to get logged in user's data
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        link
      }
    }
  }
`;
