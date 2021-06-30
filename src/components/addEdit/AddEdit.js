import React, { useState, useEffect } from 'react';
import "./AddEdit.css";
import { Link } from "react-router-dom";
import { addBook, updateBook } from '../../api/book';

export default function AddEdit(props) {

    const [id, setId] = useState();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [isbn, setIsbn] = useState('');
    const [link, setLink] = useState(false);

    const properties = props.location.propsSearch;

    const setData = () => {
        if (properties) {
            setId(properties.id);
            setTitle(properties.title);
            setAuthor(properties.author);
            setCategory(properties.category);
            setIsbn(properties.isbn);
        }
    }

    const confirmAdding = () => {
        if (title && author && category && isbn && !properties) {
            addBook(title, author, category, isbn);
            setTitle('');
            setAuthor('');
            setCategory('');
            setIsbn('');
            setLink(true);
        } else if (title && author && category && isbn && properties) {
            updateBook(id, title, author, category, isbn);
            setTitle('');
            setAuthor('');
            setCategory('');
            setIsbn('');
            setLink(true);
        } else {
            alert("You don`t enter all data!")
        }
    }

    useEffect(() => {
        setData();
    }, [])

    return (
        <div className="addedit">
            <div className="addedit__title">{properties ? properties.titleOfPage : "Add"} a book!</div>
            <div className="addedit__form">
                <input type="text" placeholder="Title" defaultValue={title} onChange={e => setTitle(e.target.value)}/>
                <input type="text" placeholder="Author" defaultValue={author} onChange={e => setAuthor(e.target.value)}/>
                <input type="text" placeholder="Category" defaultValue={category} onChange={e => setCategory(e.target.value)}/>
                <input type="text" placeholder="ISBN" defaultValue={isbn} onChange={e => setIsbn(e.target.value)}/>
            </div>
            <Link to="/dashboard"><button className="addedit__btn" onClick={confirmAdding}>{properties ? properties.titleOfPage : "Add"}</button></Link>
        </div>
    )
}