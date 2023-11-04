import "./App.css";
import { useState } from "react";
import Button from "./Components/Comps/Button/Button";
import Form from "./Components/Comps/Form/Form";

function App() {
    const [formText, setFormText] = useState(null);
    const [inputData, setInputData] = useState({
        email: "",
        text: "",
        password: "",
        number: "",
    });
    const [isInputGreen, setIsInputGreen] = useState({
        email: true,
        text: true,
        password: true,
        number: true,
    });

    function validateInputs() {
        let isFailedValidation = false;

        Object.entries(inputData).forEach(([key, value]) => {
            if (value === "") {
                setIsInputGreen((prevData) => ({
                    ...prevData,
                    [key]: false,
                }));
                isFailedValidation = true;
            }
        });
        
        if (!isFailedValidation) {
            printInputs();
        }
    }

    function printInputs() {
        setFormText(`Typed email: ${inputData.email} <br /> Typed login: ${inputData.text} <br /> Typed password: ${inputData.password} <br /> Typed age: ${inputData.number} <br />`);
    }

    return (
        <div className="App">
            <div className="form__container">
                <Form setInputData={setInputData} isInputGreen={isInputGreen} setIsInputGreen={setIsInputGreen} />
            </div>
            <div className="form__results-container">
                <span className="form__results" dangerouslySetInnerHTML={{ __html: formText }}></span>
            </div>
            <div className="button__container">{<Button isDisabled={Object.values(isInputGreen).includes(false)} name="Send data" onClick={validateInputs} />}</div>
        </div>
    );
}

export default App;
