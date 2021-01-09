
import { IResolvers } from "graphql-tools";
import { IVolume } from '@api/volume';
 
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
    books: async (_source, { id }, { dataSources }) => {
        return dataSources.booksAPI.getVolumesByAuthor('Terry Pratchett')
        .then((result: any) => {
            return result?.items;
        });
      },
    book: async (_source, { id }, { dataSources }) => {
        console.log(id);
        return dataSources.booksAPI.getBook(id);
      },
  },
};

export default resolvers;