import { IVolume } from "../../../../api/build";
import { titleCase } from "../../utils/utils";
import './book-details.css';

export const BookDetails = (props: IVolume) => (
    <div className="col-md-6 book-details">
        {!!props.id ?
            <div className="container-fluid">
                <div className="row" style={{ marginBottom: "32px" }}>
                    <span className="col-md-4">
                        <img src={props?.volumeInfo?.imageLinks?.smallThumbnail} width="128" alt="Book"></img>
                    </span>
                    <h1 className="col-md-8">{titleCase(props?.volumeInfo?.title)}</h1>
                </div>
                <div className="book__authors-section">
                    {props?.volumeInfo?.authors.map(
                        (author: string) =>
                        <h4 className="book__author" key={author}><small>{author}</small></h4>)}
                </div>
                <h4>{titleCase(props?.volumeInfo?.subtitle)}</h4>
                <p>{props?.volumeInfo?.description}</p>
            </div>
            : <div>Select a Book</div>
        }
    </div>
)
export default BookDetails;