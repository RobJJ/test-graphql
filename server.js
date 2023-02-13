const express = require("express");
// this function will help us build a schema using the type system
const { buildSchema } = require("graphql");
// middleware function
const { graphqlHTTP } = require("express-graphql");

// start with special query type, root type.. defines enter point for all queries..
// we are determining shape of data
const schema = buildSchema(`
type Query {
    description: String
    price: Float
}
`);

const root = {
  description: "Red Shoe",
  price: 42.12,
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
