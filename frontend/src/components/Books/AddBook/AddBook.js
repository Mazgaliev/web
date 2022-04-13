import React from "react";
import {useNavigate, useHistory} from "react-router";

const AddBook = (props) => {
    const navigate = useNavigate();
    // const history = useHistory();

    const [formData, updateFormData] = React.useState({
        name: 1,
        category: 0,
        author: 0,
        availableCopies: 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const category = formData.category;
        const author = formData.author;
        const availableCopies = formData.availableCopies;
        props.onAddBook(name, category, author, availableCopies);
        navigate("/books");
    }

    return (<div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>

                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder="Enter book name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {/*<option></option>*/}
                            {props.categories.map((term) =>
                                <option value={term.value}>{term.toString()}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Authors</label>
                        <select name="author" className="form-control" onChange={handleChange}>
                            {/*<option></option>*/}
                            {props.authors.map((term) =>
                                <option value={term.id}>{term.name}</option>
                            )}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="availableCopies">Available Copies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder="availableCopies"
                               onChange={handleChange}
                        />
                    </div>

                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}


export default AddBook;