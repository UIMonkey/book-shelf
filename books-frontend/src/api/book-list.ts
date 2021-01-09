import { IVolume } from "../../../api/build";

export interface IBookList {
    handleSelect: (book: IVolume) => void
}

export interface IBookListItem {
    book: IVolume;
    selectBook: (book: IVolume) => void
}
