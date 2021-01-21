import { IVolume } from '@api/volume';
import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import * as secret from '../secret/api-key.json';
import { books } from './book-data';

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
    return new Promise<Partial<IVolume>[]>((resolve, reject) => books);
    // return this.get(`volumes/${id}?key=${secret.googleBooksApiKey}`)
  }

  async getVolumesByAuthor(author: string) {
    console.log("Mock data yay", author)
    // return this.get(`volumes?q=inauthor:${author}&key=${secret.googleBooksApiKey}`)
    return new Promise<Partial<IVolume>[]>((resolve, reject) => books);
  }
}
