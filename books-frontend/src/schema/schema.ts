import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
query {
    books {
        id
      selfLink
      volumeInfo {
        title
        subtitle
        authors
        description
        imageLinks {
            smallThumbnail
        }
      }
    }
 }
`

export const GET_BOOK_DETAILS = gql`
query Book($id: String){
    book(id: $id) {
        id
      selfLink
      volumeInfo {
        title
        subtitle
        authors
        description
        imageLinks {
            smallThumbnail
        }
      }
    }
 }
`

export const GET_GOOGLE_BOOK_DETAILS = gql`
query {
    book {
        id
      selfLink
      volumeInfo {
        title
        subtitle
        authors
        description
        imageLinks {
            smallThumbnail
        }
      }
    }
 }
`