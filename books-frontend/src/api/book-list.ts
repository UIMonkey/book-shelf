import { IBook } from "./book";

export interface IBookList {
    handleSelect: (book: IBook) => void
}

export interface IBookListItem {
    book: IBook;
    selectBook: (book: IBook) => void
}
