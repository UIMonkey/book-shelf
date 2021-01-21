import { IBookListItem } from "../../api/book-list";
import { titleCase } from "../../utils/utils";
import './book-list-item.css';

export const BookListItem = (props: IBookListItem) => (
    <div className="book-list-item" onClick={(_) => props.selectBook(props.book)}>
        <img
            src={props?.book?.volumeInfo?.imageLinks?.smallThumbnail}
            alt="Book"
            width="64"
            className="img-rounded book-list-item__img"></img>
        <div>
            <h4 className="item-param" data-testid="title">{titleCase(props.book?.volumeInfo?.title)}</h4>
            <p className="item-param lead" data-testid="subtitle">{titleCase(props.book?.volumeInfo?.subtitle)}</p>
        </div>
    </div>
)

export default BookListItem;