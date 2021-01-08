
import { IResolvers } from "graphql-tools";
 
const books = [
    {
        id: "Book 1",
        title: "Book 1",
        author: "Missallanious",
        genre: "Crime"
    },
    {
        id: "Book 2",
        title: "Yet another novel",
        author: "A.another",
        genre: "Comedy"
    },
    {
        id: "Book 3",
        title: "booky wook",
        author: "j.king",
        genre: "Language"
    },

]

const resolvers: IResolvers = {
  Query: {
    books: () => books,
    bookById: (parent, {id}, {dataSources}, info) => {
        console.log(books.find((book: any) => id === book.title));
        return books.find((book: any) => id === book.title);
    }
  },
};

export default resolvers;