import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import * as secret from '../secret/api-key.json';

export default class BooksAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.googleapis.com/books/v1/';
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('key', this.context.token);
  }

  async getBook(id: string): Promise<any> {
    return this.get(`volumes/${id}?key=${secret.googleBooksApiKey}`)
  }

  async getVolumesByAuthor(author: string) {
    return this.get(`volumes?q=inauthor:${author}&key=${secret.googleBooksApiKey}`)
  }
}
