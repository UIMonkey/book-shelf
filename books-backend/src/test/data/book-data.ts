import { IVolume } from "@api/volume";

export const books: Partial<IVolume>[] = [
    {
        id: 'fghssr5d4',
        selfLink: '',
        volumeInfo: {
            title: 'Book 1',
            subtitle: 'Test book',
            authors: ['Me'],
            publisher: 'Also me',
            publishedDate: 'Today',
            pageCount: 342,
            averageRating: 8,
            ratingsCount: 123,
            description: 'Something written in my spare time and it shows',
            dimensions: {
                height: '',
                width: '',
                thickness: ''
            },
            mainCategory: '',
            categories: [''],
            imageLinks: {
                smallThumbnail: '',
                thumbnail: '',
                small: '',
                medium: '',
                large: '',
                extraLarge: ''
            },
            language: 'en'
        }
    }
]