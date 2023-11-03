import "./App.css";
import { useState } from "react";
import Button from "./Components/Comps/Button/Button";
import Form from "./Components/Comps/Form/Form";

function App() {
    const [formText, setFormText] = useState(null);
    const [email, setEmail] = useState(null);

    function printInputs() {
        setFormText(`Typed email: ${email} <br />`);
    }

    return (
        <div className="App">
            <div className="form__container">
                <Form setEmail={setEmail} />
            </div>
            <div className="form__results-container">
                <span className="form__results" dangerouslySetInnerHTML={{ __html: formText }}></span>
            </div>
            <div className="button__container">{<Button name="Send data" onClick={printInputs} />}</div>
        </div>
    );
}

export default App;
