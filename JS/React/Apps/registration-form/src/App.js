import "./App.css";
import { useState } from "react";
import Button from "./Components/Comps/Button/Button";
import Form from "./Components/Comps/Form/Form";

function App() {
    const [formText, setFormText] = useState(null);

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
            printInputs();
        }
    }

    //prints all what user typed if all inputs not empty and validation is succsessful
    function printInputs() {
        setFormText(`Typed email: ${inputData.email} <br /> Typed login: ${inputData.text} <br /> Typed password: ${inputData.password} <br /> Typed age: ${inputData.number} <br />`);
    }

    return (
        <div className="App">
            <div className="form__container">
                <Form setInputData={setInputData} setInputsColor={setInputsColor} inputsColor={inputsColor} />
            </div>
            <div className="form__results-container">
                <span className="form__results" dangerouslySetInnerHTML={{ __html: formText }}></span>
            </div>
            <div className="button__container">{<Button isDisabled={Object.values(inputsColor).includes("red")} name="Send data" onClick={validateInputs} />}</div>
        </div>
    );
}

export default App;
