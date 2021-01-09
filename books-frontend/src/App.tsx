import { useLazyQuery, useQuery } from '@apollo/client';
import React from 'react';
import { IBook } from './api/book';
import './App.css';
import BookDetails from './components/book-details';
import BookList from './components/book-list';
import { GET_BOOK_DETAILS, GET_GOOGLE_BOOK_DETAILS } from './schema/schema';


function App() {
  const [getBookDetails, { loading, error, data }] = useLazyQuery(GET_GOOGLE_BOOK_DETAILS, {fetchPolicy: 'no-cache'});

  const selectBook = (book: IBook): void => {
    getBookDetails({ variables: { id: "Flowers for Algernon" } });
    console.log("I'm here!", data)
  }

  return (
    <div className="container-fluid">
      <h1 style={{marginBottom: '48px'}}>Books<small style={{marginLeft: '24px'}}>My Library</small></h1>
      <div className="row">
        <BookList handleSelect={selectBook} />
        {loading ? <h1>Loading...</h1> : <BookDetails {...data?.book} />}
      </div>
    </div>
  );
}

export default App;
