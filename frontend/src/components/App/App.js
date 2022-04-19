import logo from '../../logo.svg';
import './App.css';
import {Component} from "react";
import bookStoreService from "../../repository/bookStoreRepo";
import Books from "../Books/Books"
import {BrowserRouter as Router, Navigate, Route, Routes, Redirect} from "react-router-dom";
import React from "react";
import authors from "../Authors/Authors";
import Authors from "../Authors/Authors";
import Categories from "../Categories/Categories";
import Header from "../Header/Header";
import AddBook from "../Books/AddBook/AddBook";
import EditBook from "../Books/EditBook/EditBook";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            authors: [],
            categories: [],
            selectedBook: {}
        }
    }

    loadAuthors = () => {
        bookStoreService.fetchAuthors().then((data) => {
            this.setState({
                authors: data.data
            })
        });
    }

    loadBooks = () => {
        bookStoreService.fetchBooks().then((data) => {
            this.setState({
                books: data.data
            })
        });
    }
    getBook = (id) => {
        bookStoreService.getBook(id).then((data) => {
            this.setState({
                selectedBook: data.data
            })
        })
    }
    loadCategories = () => {
        bookStoreService.fetchCategories().then((data) => {
            this.setState({
                categories: data.data
            })
        })
    }
    deleteBook = (id) => {
        bookStoreService.deleteBook(id)
            .then(() => {
                this.loadBooks()
            });
    }


    componentDidMount() {
        this.loadBooks()
        this.loadAuthors()
        this.loadCategories()
    }

    addBook = (name, category, author, availableCopies) => {
        bookStoreService.addBook(name, category, author, availableCopies)
            .then(() => {
                this.loadBooks()
            });
    }

    editBook = (name, category, author, availableCopies) => {
        bookStoreService.editBook(name, category, author, availableCopies).then(() => {
            this.loadBooks();
        });
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className={"container"}>
                        <Routes>
                            <Route path={"/category"} element={<Categories categories={this.state.categories}/>}/>

                            <Route path={"/books/add"} element={<AddBook categories={this.state.categories}
                                                                         authors={this.state.authors}
                                                                         onAddBook={this.addBook}/>}/>
                            <Route path={"books/edit/:id"} element={<EditBook categories={this.state.categories}
                                                                              authors={this.state.authors}
                                                                              onEditBook={this.editBook}
                                                                              book={this.state.selectedBook}/>}/>
                            <Route path={"/books"}
                                   element={<Books books={this.state.books} onDelete={this.deleteBook}/>}/>

                            <Route path={"/authors"} element={<Authors authors={this.state.authors}/>}/>
                        </Routes>
                        {/*<Navigate to={"/books"}/>*/}
                    </div>
                </main>
            </Router>
        );
    }


}

export default App;
// <Router>
// <Header/>
// <main>
// <div className="container">
// <Route path={"/authors"} exact render={() =>

//                 <Manufacturers authors={this.state.authors}/>}/>
//
//             <Route path={"/categories"} exact render={() =>
//                 <Categories categories={this.state.categories}/>}/>
//
//             <Route path={"/books/add"} exact render={() =>
//                 <ProductAdd categories={this.state.categories}
//                             authors={this.state.authors}
//                             onAddBook={this.addBook}/>}/>
//
//             <Route path={"/books/edit"} exact render={() =>
//                 <ProductEdit categories={this.state.categories}
//                              authors={this.state.authors}
//                              onEditBook={this.editBook}
//                              book={this.state.selectedBook}/>}/>
//
//             <Route path={"/books"} exact render={() =>
//                 <Products books={this.state.books}
//                           onDelete={this.deleteBook}
//                           onEdit={this.getBook}/>}/>
//
//             <Redirect to={"/books"}/>
//         </div>
//     </main>
// </Router>