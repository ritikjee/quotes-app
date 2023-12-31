"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const typeDefs = `#graphql
  type Book{
    id: ID!
    # The title of the book
    title: String
    author: String
    soldCopies: Int
    serialNumber: String
    available: Boolean
}
type Query {
    books: [Book]
}

`;
const books = [
    {
        id: '1',
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
        soldCopies: 120000,
        serialNumber: '123456',
        available: true
    },
    {
        id: '2',
        title: 'Jurassic Park',
        author: 'Michael Crichton',
        soldCopies: 120000,
        serialNumber: '123456',
        available: true
    },
    {
        id: '3',
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        soldCopies: 120000,
        serialNumber: '123456',
        available: true
    },
];
const resolvers = {
    Query: {
        books: () => books,
    },
};
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const server = new server_1.ApolloServer({
        typeDefs,
        resolvers,
    });
    const { url } = yield (0, standalone_1.startStandaloneServer)(server, {
        listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url}`);
});
startServer();
