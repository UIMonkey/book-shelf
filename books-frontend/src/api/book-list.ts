import { ApolloError } from "@apollo/client";
import { IVolume } from "../../../api/build";

export interface IBookList {
    loading: boolean;
    error: ApolloError | undefined;
    data: any;
    handleSelect: (book: IVolume) => void
}

export interface IBookListItem {
    book: IVolume;
    selectBook: (book: IVolume) => void
}
