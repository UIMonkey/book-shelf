
import { IResolvers } from "graphql-tools";
import { IVolume } from '@api/volume';

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