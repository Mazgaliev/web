import axios from '../custom-axios/axios-js'

const bookStoreService = {
    fetchAuthors: () => {
        return axios.get("/authors");
    },
    fetchCategories: () => {
        return axios.get("/category");
    },
    fetchBooks: () => {
        return axios.get("/books");
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    addBook: (name, availableCopies, category, author) => {
        return axios.post("/books/add", {
            "name": name,
            "availableCopies": availableCopies,
            "category": category,
            "author": author
        });
    },
    editBook: (id, name, availableCopies, category, author) => {
        return axios.put(`/products/edit/${id}`, {
            "name": name,
            "availableCopies": availableCopies,
            "category": category,
            "author": author
        });
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    }

}
export default bookStoreService;