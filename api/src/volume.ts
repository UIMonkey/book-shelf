export interface IVolume {
    id: string;
    kind: string;
    etag: string;
    selfLink: string
    volumeInfo: {
        title: string;
        subtitle: string;
        authors: string[];
        publisher: string;
        publishedDate: string;
        pageCount: number;
        averageRating: number;
        ratingsCount: number;
        description: string;
        dimensions: {
            height: string;
            width: string;
            thickness: string;
        },
        mainCategory: string;
        categories: string[];
        imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
            small: string;
            medium: string;
            large: string;
            extraLarge: string;
        },
        language: string;
    }
    saleInfo: {
        country: string;
        listPrice: {
            amount: number;
            currenyCode: string;
        },
        retailPrice: {
            amount: number;
            currencyCode: string;
        }
    }
}

export class Volume {
    id;
    selfLink = '';
    volumeInfo = {
        title: '',
        subtitle: '',
        authors: [],
        publisher: '',
        publishedDate: '',
        pageCount: 0,
        averageRating: 0,
        ratingsCount: 0,
        description: '',
        dimensions: {
            height: '',
            width: '',
            thickness: '',
        },
        mainCategory: '',
        categories: [],
        imageLinks: {
            smallThumbnail: '',
            thumbnail: '',
            small: '',
            medium: '',
            large: '',
            extraLarge: '',
        },
        language: '',
    }
    saleInfo = {
        country: '',
        listPrice: {
            amount: 0,
            currenyCode: '',
        },
        retailPrice: {
            amount: 0,
            currencyCode: '',
        }
    }
    constructor(id: string, title = '') {
        this.id = id;
        this.volumeInfo.title = title;
    }
}