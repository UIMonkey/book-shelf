import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import * as secret from '../secret/api-key.json';

export default class BooksAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.googleapis.com/books/v1/';
    // this.context.token = secret.googleBooksApiKey;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('key', this.context.token);
  }

  async getBook(id: string) {
    // return this.get(`volumes?/q=${id}&key=${secret.googleBooksApiKey}`);
    return this.get(`volumes/${id}?key=${secret.googleBooksApiKey}`)
  }

//   async getMostViewedMovies(limit = 10) {
//     const data = await this.get('movies', {
//       per_page: limit,
//       order_by: 'most_viewed',
//     });
//     return data.results;
//   }
}
