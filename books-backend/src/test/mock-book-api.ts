import { IVolume, Volume } from '@api/volume';
import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import * as secret from '../secret/api-key.json';
// import { books } from './data/book-data';
import * as books from './data/book-data.json';

export default class MockBooksAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.googleapis.com/books/v1/';
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('key', this.context.token);
  }

  async getBook(id: string) {
    console.log("mock data yay", id)
    return new Promise<Partial<IVolume>>((resolve, reject) => {
      const selectedBook = books.items.find((book) => book.id === id);
      const book = (selectedBook ? selectedBook : {});
      return resolve(book);
    });
  }

  async getVolumesByAuthor(author: string): Promise<any> {
    return new Promise<any>((resolve, reject) => resolve(books));
  }
}
