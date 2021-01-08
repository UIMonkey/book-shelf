import { IBook } from "../api/book";
import { titleCase } from "../utils/utils";

export const BookDetails = (props: IBook) => (
    <div className="col-md-6 book-details">
        <h1>{titleCase(props.title)}</h1>
        <h4>Author: {titleCase(props.author)}</h4>
        <h4>{titleCase(props.genre)}</h4>
    </div>
)
export default BookDetails;