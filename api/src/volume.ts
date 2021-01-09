export interface IVolume {
    id: string;
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