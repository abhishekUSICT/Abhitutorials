import React from 'react';
import Book from './Book.js';

function BookList(props) {
    return (
        <>
            {props != null && props.content != null && props.content.books != null && props.content.books.map((book) => {
                return <Book name={book.name} link={book.link} />
            })}
        </>
    );
}
export default BookList;