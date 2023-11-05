import "./App.css";
import { useState } from "react";
import Button from "./Components/Comps/Button/Button";
import Form from "./Components/Comps/Form/Form";

function App() {
    const [formText, setFormText] = useState(null);
    const [showUserData, setShowUserData] = useState(false);

    //store what user is type in inputs
    const [inputData, setInputData] = useState({
        email: "",
        text: "",
        password: "",
        number: "",
    });
    //store inputs color
    const [inputsColor, setInputsColor] = useState({
        email: "grey",
        text: "grey",
        password: "grey",
        number: "grey",
    });

    //when user clicks button check if there is an empty inputs and mark them red, if not - print what user typed
    function validateInputs() {
        let isFailedValidation = false;

        Object.entries(inputData).forEach(([key, value]) => {
            if (value === "") {
                setInputsColor((prevData) => ({
                    ...prevData,
                    [key]: "red",
                }));
                isFailedValidation = true;
            }
        });

        if (!isFailedValidation) {
            setShowUserData(true);
            printInputs();
        }
    }

    //prints all what user typed if all inputs not empty and validation is succsessful
    function printInputs() {
        setFormText(`Congrats with successful registration! <br /> <br /> Your login data: <br /> <br /> email: ${inputData.email} <br />  login: ${inputData.text} <br /> password: ${inputData.password}`);
    }

    return (
        <div className="App">
            <div className="form__container">
                <p className="form__title">Register NOW</p>
                <Form setInputData={setInputData} setInputsColor={setInputsColor} inputsColor={inputsColor} />
            </div>
            <div className={`form__results-container ${showUserData && !["red", "grey"].some(color => Object.values(inputsColor).includes(color)) ? "show" : ""}`}>
                <span className={`form__results ${showUserData && !["red", "grey"].some(color => Object.values(inputsColor).includes(color)) ? "show" : ""}`} dangerouslySetInnerHTML={{ __html: formText }}></span>
            </div>
            <div className="button__container">{<Button isDisabled={Object.values(inputsColor).includes("red")} name="Send data" onClick={validateInputs} />}</div>
        </div>
    );
}

export default App;
