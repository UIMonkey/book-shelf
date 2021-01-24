import { gql } from "@apollo/client";

export const GET_BOOK_DETAILS = gql`
query Book($id: ID){
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
export const GET_BOOKS = gql`
query Books($author: String){
    books(author: $author) {
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