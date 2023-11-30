import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

interface Book1 {
    id: string;
    title: string;
    author: string;
    soldCopies: number;
    serialNumber: string;
    available: boolean
}

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

`
const books: Book1[] = [
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

const startServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url}`);
};

startServer();
