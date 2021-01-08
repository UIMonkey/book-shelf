import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
query {
    books {
        title
        author
        genre
    }
 }
`

export const GET_BOOK_DETAILS = gql`
query Book($id: String){
    bookById(id: $id) {
        id
        title
        author
        genre
    }
 }
`