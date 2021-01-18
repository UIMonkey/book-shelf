import './search.css'

export interface ISearchComponent {
    value: string;
    onChange: () => void;
    children: string;
}

const Search = (props: ISearchComponent) => {
    return (
      <div className="container">
        <label htmlFor="search" className="search-label">{props.children}</label>
        <input
          id="search"
          type="text"
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    );
  }

  export default Search;