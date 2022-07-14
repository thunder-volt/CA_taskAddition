import { useState } from "react";
// import "./app.css";
import FormInput from "./FormInput";

const Form = ({ closeModal }) => {
    const [values, setValues] = useState({
        taskname: "",
        description: "",
        points: "",
        deadline: "",
    });

    const inputs = [
        {
            id: 1,
            name: "taskname",
            type: "text",
            placeholder: "Taskname",
            errorMessage:
                "Taskname should be 3-16 characters and shouldn't include any special character!",
            label: "Taskname",
            required: true,
        },
        {
            id: 2,
            name: "despcription",
            type: "text",
            placeholder: "Description",

            label: "Description",
            required: true,
        },
        {
            id: 3,
            name: "points",
            type: "number",
            placeholder: "Points",
            label: "points",
        },
        {
            id: 4,
            name: "deadline",
            type: "date",
            placeholder: "Deadline",

            label: "Deadline",

            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };



    return (
        <div className="app">
            <form onSubmit={handleSubmit}>
                <div className="btn">  <button className="btn-cnl" onClick={() => closeModal(false)}>X</button></div>
                <h1>Task Addition</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.taskname]}
                        onChange={onChange}
                    />
                ))}
                <button onClick={() => closeModal(false)}>ADD</button>
            </form>
        </div>
    );
};

export default Form;