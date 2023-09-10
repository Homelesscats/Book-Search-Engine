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

// Mutation to login a user

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// Mutation to add a user

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// Mutation to save a book

export const SAVE_BOOK = gql`
  mutation saveBook($input: BookInput!) {
    saveBook(input: $input) {
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

// Mutation to remove a book

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
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

// Query to get all books
