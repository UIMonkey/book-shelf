export interface ISearchComponent {
    value: string;
    onChange: () => void;
    children: string;
}

const Search = (props: ISearchComponent) => {
    return (
      <div>
        <label htmlFor="search">{props.children}</label>
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