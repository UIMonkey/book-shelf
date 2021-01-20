import { render, screen } from '@testing-library/react';
import { IVolume, Volume } from '../../../api/build';
import { IBookListItem } from '../api/book-list';
import { BookListItem } from './book-list-item';

const testVolume = new Volume('hjskdf', 'This Is My Book');

const testBook: IBookListItem = {
    book: {
        ...testVolume,
        volumeInfo: {
            ...testVolume.volumeInfo,
            subtitle: 'I am subtitle',
            authors: ['John', 'Sue']
        }
    },
    selectBook: () => { }
}

describe('BookListItem', () => {

    test('It renders the booklistitem', () => {
        render((<BookListItem key={testBook.book.id} book={testBook.book} selectBook={testBook.selectBook} />));
    });

    test('It renders the book title', () => {
        render(<BookListItem key={testBook.book.volumeInfo.title} book={testBook.book} selectBook={testBook.selectBook}></BookListItem>);
        expect(screen.getByText(testVolume.volumeInfo.title)).toBeInTheDocument();
    });

    test('The title should always be in titlecase', () => {
        const { getByTestId } = render(<BookListItem key={testBook.book.volumeInfo.title} book={testBook.book} selectBook={testBook.selectBook}></BookListItem>);
        const title = getByTestId('title');
        const wordArray = title.textContent?.split(' ');
        const firstLetterRegEx = /^[A-Z]/;
        if (wordArray) {
            expect(wordArray.every((word) => firstLetterRegEx.test(word))).toBe(true);
        } else {
            expect(true).toBe(true);
        }
    });

    test('It renders the subtitle', () => {
        const { getByTestId } = render(<BookListItem key={testBook.book.volumeInfo.title} book={testBook.book} selectBook={testBook.selectBook}></BookListItem>);
        const subtitle = getByTestId('subtitle');
        expect(subtitle).toHaveTextContent('I Am Subtitle');
    });

    test('It matches the snapshot', () => {
        const { container, getByText } = render(<BookListItem key={testBook.book.volumeInfo.title} book={testBook.book} selectBook={testBook.selectBook}></BookListItem>);
        expect(getByText(testVolume.volumeInfo.title)).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });
});