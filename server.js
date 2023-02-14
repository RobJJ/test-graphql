const express = require("express");
const path = require("path");
// this function will help us build a schema using the type system
// const { buildSchema } = require("graphql");
// middleware function
const { graphqlHTTP } = require("express-graphql");
// graphQL functions taken from package
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

// const schemaText = `
// type Query {
//     products: [Product]
//     orders: [Order]
// }
// `;
// ** look into any directorys../* match any files with ____
// use build in path module and join func
// we want this loadFile func to look at our server directory specifically so we need to use the __dirname
const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
// this makeExecutableSchema is replacing the buildSchema function we used earlier to set the schema
const schema = makeExecutableSchema({
  // typeDefs are like schemas
  typeDefs: [schemaText],
});
// start with special query type, root type.. defines enter point for all queries..
// we are determining shape of data
// [Product], will be a list of these types..
// make fields required by using ! after
// ID is a special graphQL type we can use, almost like a string but more explicit
// const schema = buildSchema();

const root = {
  products: [
    {
      id: "redshoe",
      description: "Red Shoe",
      price: 42.54,
    },
    {
      id: "bluejean",
      description: "Blue Jeans",
      price: 12.94,
    },
  ],
  orders: [
    {
      date: "2005-05-05",
      subtotal: 90.22,
      items: [
        {
          product: {
            id: "redshoe",
            description: "Old Red Shoe",
            price: 45.22,
          },
          quantity: 2,
        },
      ],
    },
  ],
};

const app = express();
// graphQL middleware - sets up graphql server.. pass in graphiql to help with queries
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log(`Running graphQL server...`);
});
