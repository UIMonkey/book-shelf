
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

// interface IVolume {
//     id: string;
//     selfLink: string
//     volumeInfo: {
//         title: string;
//         subtitle: string;
//     } 
// }

const mapItems = (items: any[]) => {
    items.forEach(item => console.log(item.volumeInfo))
}

const resolvers: IResolvers = {
  Query: {
    books: () => books,
    bookById: (parent, {id}, {dataSources}, info) => {
        console.log(books.find((book: any) => id === book.title));
        return books.find((book: any) => id === book.title);
    },
    book: async (_source, { id }, { dataSources }) => {
        dataSources.booksAPI.getBook('zyTCAlFPjgYC').then((result: IVolume) => console.log(result));
        return dataSources.booksAPI.getBook('zyTCAlFPjgYC');
      },
  },
};

export default resolvers;