import { IGoogleBookAPIReponse } from '@api/book-query';

export interface IBookAPI {
    getBook: (id: string) => Promise<IGoogleBookAPIReponse>;
    getVolumesByAuthor: (author: string) => Promise<IGoogleBookAPIReponse>;
}