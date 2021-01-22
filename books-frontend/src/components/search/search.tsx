import './search.css'

export interface ISearchComponent {
  value: string;
  onChange: (event: React.BaseSyntheticEvent) => void;
  label: string;
}

const Search = (props: ISearchComponent) => {

  return (
    <div className="container">
      <label htmlFor="search" data-testid="search-label" className="search-label">{props.label}</label>
      <input
        data-testid="search-input"
        id="search"
        type="text"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Search;