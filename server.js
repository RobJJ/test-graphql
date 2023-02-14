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
// OLD
// const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));
// New way of same approach
const typesArray = loadFilesSync("**/*", {
  extensions: ["graphql"],
});
// this makeExecutableSchema is replacing the buildSchema function we used earlier to set the schema
const schema = makeExecutableSchema({
  // typeDefs are like schemas... pass in the 'arr' as created by the loadFilesSync function provided by tools
  typeDefs: typesArray,
  resolvers: resolversArray,
});
// start with special query type, root type.. defines enter point for all queries..
// we are determining shape of data
// [Product], will be a list of these types..
// make fields required by using ! after
// ID is a special graphQL type we can use, almost like a string but more explicit
// const schema = buildSchema();

// const root = {
//   products: require("./products/products.model"),
//   orders: require("./orders/orders.model"),
// };

const app = express();
// graphQL middleware - sets up graphql server.. pass in graphiql to help with queries
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    // rootValue: root,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log(`Running graphQL server...`);
});
