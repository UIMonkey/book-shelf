import { IVolume } from '../../api/build';
import { useLazyQuery, useQuery } from '@apollo/client';
import React from 'react';
import './App.css';
import BookDetails from './components/book-details';
import BookList from './components/book-list';
import { GET_BOOK_DETAILS } from './schema/schema';


function App() {
  const [getBookDetails, { loading, error, data }] = useLazyQuery(GET_BOOK_DETAILS, { fetchPolicy: 'no-cache' });

  const selectBook = (book: IVolume): void => {
    getBookDetails({ variables: { id: book.id } });
    console.log("I'm here!", book.id)
  }

  return (
    <div className="container-fluid" style={{height: '100%'}}>
      <h1 style={{ marginBottom: '48px' }}>Books<small style={{ marginLeft: '24px' }}>My Library</small></h1>
      <div className="row" style={{height: '100%'}}>
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
