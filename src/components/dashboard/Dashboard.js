import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import { getBook, removeBook } from '../../api/book';

export default function Dashboard() {

    const [books, setBooks] = useState();

    const getBooks = () => getBook().then(response => setBooks(response.data));

    const deleteBook = (e) => {
        const id = e.target.id;
        removeBook(id).then((res) => {
            getBooks();
        }).catch((err) => {
            if (err.response.status === 400) {
                console.log(err.response.data)
            }
        })
    }

    useEffect(() => {
        getBooks();
    }, [])

    return (
        <div>
            {books && <div>
                        <table className="table">
                            <thead className="table__header">
                                <tr>
                                    <th>Title</th>
                                    <th>Author name</th>
                                    <th>Category</th>
                                    <th>ISBN</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map(book => <tr key={book.id} className="table__body">
                                                        <td>{book.title}</td>
                                                        <td>{book.author}</td>
                                                        <td>{book.category}</td>
                                                        <td>{book.isbn}</td>
                                                        <td>
                                                            <Link to={{
                                                                pathname: "/add-edit",
                                                                propsSearch: {
                                                                    titleOfPage: "Edit",
                                                                    id: book.id,
                                                                    title: book.title,
                                                                    author: book.author,
                                                                    category: book.category,
                                                                    isbn: book.isbn
                                                                }
                                                            }}><button className="table__btn">Edit</button></Link>
                                                            <button id={book.id} className="table__btn" onClick={e => deleteBook(e)}>Delete</button>
                                                        </td>
                                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    )
}