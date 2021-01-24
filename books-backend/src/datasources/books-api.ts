import { IGoogleBookAPIReponse } from '@api/book-query';
import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import * as secret from '../secret/api-key.json';
import { IBookAPI } from './books-api.itf';

export default class BooksAPI extends RESTDataSource implements IBookAPI {
  constructor() {
    super();
    this.baseURL = 'https://www.googleapis.com/books/v1/';
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('key', this.context.token);
  }

  async getBook(id: string): Promise<IGoogleBookAPIReponse> {
    return this.get(`volumes/${id}?key=${secret.googleBooksApiKey}`)
  }

  async getVolumesByAuthor(author: string): Promise<IGoogleBookAPIReponse> {
    return this.get(`volumes?q=inauthor:${author}&key=${secret.googleBooksApiKey}`)
  }
}
