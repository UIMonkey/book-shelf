import { render, screen } from '@testing-library/react';
import { IVolume, Volume } from '../../../api/build';
import { IBookListItem } from '../api/book-list';
import { BookListItem } from './book-list-item';

const testVolume = new Volume('hjskdf', 'Book1');

const testBook: IBookListItem = {
    book: {
        ...testVolume,
        volumeInfo: {
            ...testVolume.volumeInfo,
            authors: ['John', 'Sue']
        }
    },
    selectBook: () => { }
}

describe('BookListItem', () => {

    test('It renders the booklistitem', () => {
        render((<BookListItem key={testBook.book.id} book={testBook.book} selectBook={testBook.selectBook}/>));
    });

    test('It renders the book title', () => {
      render(<BookListItem key={testBook.book.volumeInfo.title} book={testBook.book} selectBook={testBook.selectBook}></BookListItem>);
      expect(screen.getByText(/Book1/i)).toBeInTheDocument();
    });

    test('It matches the snapshot', () => {
        const { container, getByText } = render(<BookListItem key={testBook.book.volumeInfo.title} book={testBook.book} selectBook={testBook.selectBook}></BookListItem>);
        expect(getByText(/Book1/i)).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
      });
});