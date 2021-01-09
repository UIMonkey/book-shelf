export interface IVolume {
    id: string;
    selfLink: string
    volumeInfo: {
        title: string;
        subtitle: string;
        authors: string[];
        description: string;
        imageLinks: {
            small: string;
            smallThumbnail: string;
        }
    } 
}