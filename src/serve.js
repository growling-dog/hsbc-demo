import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,

}));

console.log('Starting port number 4000.....')
app.listen(4000);