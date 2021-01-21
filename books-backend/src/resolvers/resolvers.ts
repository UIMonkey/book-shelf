
import { IResolvers } from "graphql-tools";
import * as fs from 'fs';

const saveToFile = (json: any) => {
  fs.writeFile("./data/book-data.json", json, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
}

const resolvers: IResolvers = {
  Query: {
    books: async (_source, { id }, { dataSources }) => {
      return dataSources.booksAPI.getVolumesByAuthor('Terry Pratchett')
        .then((result: any) => {
          saveToFile(JSON.stringify(result));
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