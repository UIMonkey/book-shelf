import { IVolume } from "../../../api/build";
import { titleCase } from "../utils/utils";

export const BookDetails = (props: IVolume) => (
    <div className="col-md-6 book-details">
        <h1>{titleCase(props?.volumeInfo?.title)}</h1>
        <img src={props?.volumeInfo?.imageLinks?.smallThumbnail} alt="Book image"></img>
        {props?.volumeInfo?.authors.map((author: string) => <h4 key={author}>{author} </h4>)}
        <h4>{titleCase(props?.volumeInfo?.subtitle)}</h4>
        <p>{props?.volumeInfo?.description}</p>
    </div>
)
export default BookDetails;