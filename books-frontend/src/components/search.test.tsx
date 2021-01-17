import { render } from '@testing-library/react';
import Search, { ISearchComponent } from './search';


describe('Search component tests', () => {
    let searchInput: ISearchComponent;
    let searchComponent: JSX.Element;

    beforeAll(() => {
        searchInput = {
            value: 'timmy',
            children: 'john',
            onChange: () => { }
        }
    });

    beforeEach(() => {
        searchComponent = <Search value={searchInput.value} children={searchInput.children} onChange={searchInput.onChange} />
    });

    test('It renders the Search component', () => {
        render((searchComponent));
    });

    test('It matches the search snapshot', () => {
        const { container } = render(searchComponent);
        expect(container.firstChild).toMatchSnapshot();
    });
});