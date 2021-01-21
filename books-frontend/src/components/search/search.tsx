import './search.css'

export interface ISearchComponent {
  value: string;
  onChange: () => void;
  children: string;
}

const Search = (props: ISearchComponent) => {
  const handleChange = (event: any) => {
    console.log(event.target.value)
  }
  return (
    <div className="container">
      <label htmlFor="search" data-testid="search-label" className="search-label">{props.children}</label>
      <input
        data-testid="search-input"
        id="search"
        type="text"
        value={props.value}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;