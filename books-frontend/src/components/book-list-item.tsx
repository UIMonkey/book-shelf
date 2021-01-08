import { IBookListItem } from "../api/book-list";
import { titleCase } from "../utils/utils";
import './book-list-item.css';

export const BookListItem = (props: IBookListItem) => (
    <div className="book-list-item" onClick={(_) => props.selectBook(props.book)}>
        <span className="item-param">{titleCase(props.book.title)}</span>
        <span className="item-param">{titleCase(props.book.author)}</span>
        <span className="item-param">{titleCase(props.book.genre)}</span>
    </div>
)

export default BookListItem;