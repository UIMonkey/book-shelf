import { IVolume } from '../../api/build';
import { useLazyQuery } from '@apollo/client';
import React, { useState } from 'react';
import './App.css';
import BookDetails from './components/book-details/book-details';
import BookList from './components/book-list';
import { GET_BOOK_DETAILS } from './schema/schema';
import Search from './components/search/search';


function App() {
  const [getBookDetails, { loading, data }] = useLazyQuery(GET_BOOK_DETAILS);
  const [searchValue, setSearchValue] = useState('')
  const [label] = useState('Search Author')

  const selectBook = (book: IVolume): void => {
    getBookDetails({ variables: { id: book.id } });
  }

  const searchHandle = (e: React.BaseSyntheticEvent) => {
    console.log(e.target.value)
    // Ensure search does not include special characters
    setSearchValue(e.target.value);
  }

  return (
    <div className="container-fluid" style={{ height: '100%' }}>
      <h1 style={{ marginBottom: '48px' }}>Books<small style={{ marginLeft: '24px' }}>My Library</small></h1>
      <Search value={searchValue} label={label} onChange={searchHandle}></Search>
      <div className="row" style={{ height: '100%' }}>
        <BookList handleSelect={selectBook} />
        {loading ?
          <div className="col-md-6">
            <h1 className="loader"></h1>
          </div>
          : <BookDetails {...data?.book} />}
      </div>

    </div>
  );
}

export default App;
