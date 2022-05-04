const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("../schema/schema");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const MY_URL = process.env.MY_KEY;

const app = express();
const PORT = 3005;

mongoose.connect(MY_URL, { useNewUrlParser: true });

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

app.use(cors());

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB"));

app.listen(PORT, (err) => {
    err
        ?
        console.log(error) :
        console.log(`server is listening on port ${PORT}.`);
});