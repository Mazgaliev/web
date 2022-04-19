import React from "react";
import BookTerm from "./BooksTerms/BookTerms";
import BookTerms from "./BooksTerms/BookTerms";
import {Link} from "react-router-dom";

const books = (props) => {
    return (

        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"row"}>
                    <table className={"table table-striped"}>
                        <thead className={"thead"}>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Category</th>
                            <th scope={"col"}>Author</th>
                            <th scope={"col"}>Country</th>
                            <th scope={"col"}>Available copies</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.books.map((term) => {
                            return (
                                <BookTerms term={term} onDelete={props.onDelete} onEdit={props.onEdit}/>
                            );
                        })}

                        </tbody>
                    </table>
                </div>
            </div>
            <div className={"container"}>
                <Link to={"/books/add"} className={"btn btn-dark btn-lg "}>Add a new book</Link>
            </div>
        </div>


    )
}

export default books;