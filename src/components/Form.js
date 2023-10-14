import React,{useState} from "react";


function handleChange(e) {
    console.log(e.target.value)
}

function Form(props) {
    const [name, setName] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        props.addTask("say hello");
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    Ne yapılacak ?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    );
}


export default Form;

