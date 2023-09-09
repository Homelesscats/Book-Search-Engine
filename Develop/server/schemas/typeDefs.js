const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
  }
  input BookInput {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
