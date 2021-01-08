import { useQuery } from "@apollo/client";
import { IBook } from "../api/book";
import BookListItem from './book-list-item';
import { GET_BOOKS } from "../schema/schema";
import { IBookList } from "../api/book-list";

export const BookList = (props: IBookList) => {
    const { loading, error, data } = useQuery(GET_BOOKS, {
        pollInterval: 5000,
    });

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div className="col-md-6">
            {data?.books.map((book: IBook) => (
            <BookListItem key={book.title} book={book} selectBook={props.handleSelect}></BookListItem>
            ))}
        </div>
    )
}


export default BookList;