import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import mongoose from 'mongoose';
import { resolvers } from "./models/resolvers";
import { typeDefs } from "./models/typeDefs";

const startServer = async () => {
    const app = express();
    const PORT = process.env.PORT || 3000;
    await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    server.applyMiddleware({ app });
    app.listen({ port: PORT }, () => console.log(`🚀 Server is running at http://localhost:${PORT}${server.graphqlPath}`));
}

startServer()
    .catch(e => console.error(e));