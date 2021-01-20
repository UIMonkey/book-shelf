import { IBookListItem } from "../api/book-list";
import { titleCase } from "../utils/utils";
import './book-list-item.css';

export const BookListItem = (props: IBookListItem) => (
    <div className="book-list-item" onClick={(_) => props.selectBook(props.book)}>
        <img src={props?.book?.volumeInfo?.imageLinks?.smallThumbnail} alt="Book"></img>
        <div>
            <h3 className="item-param" data-testid="title">{titleCase(props.book?.volumeInfo?.title)}</h3>
            {/* <span className="item-param">{titleCase(props.book.volumeInfo?.authors)}</span> */}
            <span className="item-param" data-testid="subtitle">{titleCase(props.book?.volumeInfo?.subtitle)}</span>
        </div>
    </div>
)

export default BookListItem;