
import { IResolvers } from "graphql-tools";
import * as fs from 'fs';
import { IGoogleBookAPIReponse } from "@api/book-query";

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
    book: async (_source, { id }, { dataSources }) => {
      console.log(id);
      return dataSources.booksAPI.getBook(id);
    },
    books: async (_source, { author }, { dataSources }) => {
      console.log(author);
      return dataSources.booksAPI.getVolumesByAuthor(author)
      .then((result: IGoogleBookAPIReponse) => {
        return result?.items;
      });;
    },
  },
};

export default resolvers;