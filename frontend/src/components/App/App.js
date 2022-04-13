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

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            authors: [],
            categories: []
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

    render() {
        return (
            // <div>
            //     <Books books={this.state.books}/>
            // </div>
            // <div>
            //     <Authors authors={this.state.authors}/>
            // </div>
            // <div>
            //     <Categories categories={this.state.categories}/>
            // </div>
            <Router>
                <Header/>
                <main>
                    <div className={"container"}>
                        <Routes>
                            <Route path={"/category"} element={<Categories categories={this.state.categories}/>}/>

                            <Route path={"/books/add"} element={<AddBook categories={this.state.categories}
                                                                         authors={this.state.authors}
                                                                         onAddBook={this.addBook}/>}/>
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
