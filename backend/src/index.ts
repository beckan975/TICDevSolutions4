import 'reflect-metadata';

import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "type-graphql";
import { dbConnection } from './database/config';
import { AuthResolver } from './resolvers/auth.resolver';
import { ProyectoResolver } from './resolvers/proyecto.resolver';
import { RolResolver } from './resolvers/rol.resolver';
import { SolicitudResolver } from './resolvers/solicitud.resolver';
import { UsuarioResolver } from './resolvers/usuario.resolver';

import express = require("express");
require('dotenv').config();

async function main() {
    const app = express();
    const schema = await buildSchema({
        resolvers: [RolResolver, UsuarioResolver, SolicitudResolver, ProyectoResolver, AuthResolver],
    });

    dbConnection();
    app.use('/graphql', graphqlHTTP({
        graphiql: true,
        schema,
        context: () => {
            return "prueba";
        },
    }));

    app.listen(process.env.PORT, () => {
        console.log("Server started on port 3000");
    });

}

main();