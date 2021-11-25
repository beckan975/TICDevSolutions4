import { dbConnection } from './database/config';
import 'reflect-metadata'
require('dotenv').config();
import { RolResolver } from './resolvers/rol.resolver'; 
import express = require("express");
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "type-graphql";

console.log("Hola mundo");

async function main() {
    const app = express();
    const schema = await buildSchema({
        resolvers: [RolResolver],
    });

    dbConnection();
    app.use('/graphql', graphqlHTTP({
        graphiql: true,
        schema
    }));

    app.listen(process.env.PORT,() => {
        console.log("Server started on port 3000");
    });

}

main();