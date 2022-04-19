import React from "react";
import {Link} from "react-router-dom";

const BookTerms = (props) => {
    return (
        <tr>
            <td scope={"col"}>{props.term.name}</td>
            <td scope={"col"}>{props.term.category}</td>
            <td scope={"col"}>{props.term.author.name}</td>
            <td scope={"col"}>{props.term.author.country.name}</td>
            <td scope={"col"}>{props.term.availableCopies} </td>
            <td scope={"col"} className={"text-right"}>
                <div className={"row"}>
                    <div className={"container"}>
                        <a title={"Delete"} className={"btn btn-danger"}
                           onClick={() => props.onDelete(props.term.id)}>Delete</a>
                    </div>
                    <div className={"container"}>
                        <Link title={"Edit"} className={"btn btn-info"}
                              onClick={() => props.onEdit(props.term.id)} to={`/books/edit/{id}`}>Edit</Link>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default BookTerms;