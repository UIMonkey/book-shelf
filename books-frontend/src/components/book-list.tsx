import BookListItem from './book-list-item/book-list-item';
import { IBookList } from "../api/book-list";
import { IVolume } from "../../../api/build";
import React from 'react';
import LoadingSpinner from './loading-spinner/loading-spinner';

export const BookList = (props: IBookList) => {

    if (props.loading) {
        return (
            <LoadingSpinner />
        )
    }

    if (props.error) {
        return (
            <h1>Failed to Fetch</h1>
        )
    }

    return (
        <div className="col-md-6" style={{ height: '100%', overflow: "auto" }}>
            {props?.data?.books?.map((book: IVolume) => (
                <BookListItem key={book?.volumeInfo?.title} book={book} selectBook={props.handleSelect}></BookListItem>
            ))}
        </div>
    )
}


export default BookList;