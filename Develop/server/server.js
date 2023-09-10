const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const path = require("path");
const { authMiddleware } = require("./utils/auth");
const { typeDefs } = require("./schemas");
const { resolvers } = require("./schemas");
// add resolvers to this line
const db = require("./config/connection");
const routes = require("./routes");

const PORT = process.env.PORT || 5001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.use(routes);

//to do Create a new instance of an Apollo server with the GraphQL schema and resolvers

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`🌍 Now listening on localhost:${PORT}`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer();
