import { useQuery } from "@apollo/client";
import BookListItem from './book-list-item';
import { GET_BOOKS } from "../schema/schema";
import { IBookList } from "../api/book-list";
import { IVolume } from "../../../api/build";

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
        <div className="col-md-6" style={{height: '100%', overflow: "auto"}}>
            {data?.books.map((book: IVolume) => (
            <BookListItem key={book?.volumeInfo?.title} book={book} selectBook={props.handleSelect}></BookListItem>
            ))}
        </div>
    )
}


export default BookList;