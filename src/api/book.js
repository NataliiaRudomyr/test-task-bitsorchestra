import axios from 'axios';

export const getBook = async () => {
    return await axios.get(`${process.env.REACT_APP_API}`)
}

export const removeBook = async (id) => {
    return await axios.delete(`${process.env.REACT_APP_API}/${id}`)
}

export const addBook = async (title, author, category, isbn) => {
    return await axios.post(`${process.env.REACT_APP_API}`, {title, author, category, isbn})
}

export const updateBook = async (id, title, author, category, isbn) => {
    return await axios.put(`${process.env.REACT_APP_API}/${id}`, {title, author, category, isbn})
}