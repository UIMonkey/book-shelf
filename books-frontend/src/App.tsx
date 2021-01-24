import { IVolume } from '../../api/build';
import { useLazyQuery } from '@apollo/client';
import React, { useState } from 'react';
import './App.css';
import BookDetails from './components/book-details/book-details';
import { LoadingSpinner } from './components/loading-spinner/loading-spinner';
import BookList from './components/book-list';
import { GET_BOOKS, GET_BOOK_DETAILS } from './schema/schema';
import Search from './components/search/search';


function App() {
  const [getBookDetails, bookQuery] = useLazyQuery(GET_BOOK_DETAILS);
  const [getBooks, booksQuery] = useLazyQuery(GET_BOOKS);

  const [searchValue, setSearchValue] = useState('')
  const [label] = useState('Search Author')

  const selectBook = (book: IVolume): void => {
    getBookDetails({ variables: { id: book.id } });
  }

  const searchHandle = (e: React.BaseSyntheticEvent) => {
    const searchValue = e.target.value;
    // Ensure search does not include special characters
    setSearchValue(e.target.value);
    getBooks({ variables: { author: searchValue } })
  }

  return (
    <div className="container-fluid" style={{ height: '100%' }}>
      <h1 style={{ marginBottom: '48px' }}>Books<small style={{ marginLeft: '24px' }}>My Library</small></h1>
      <Search value={searchValue} label={label} onChange={searchHandle}></Search>
      <div className="row" style={{ height: '100%' }}>
        <BookList
          loading={booksQuery.loading}
          error={booksQuery.error}
          data={booksQuery.data}
          handleSelect={selectBook} />
        {bookQuery.loading ?
          <LoadingSpinner />
          : <BookDetails {...bookQuery.data?.book} />}
      </div>

    </div>
  );
}

export default App;
