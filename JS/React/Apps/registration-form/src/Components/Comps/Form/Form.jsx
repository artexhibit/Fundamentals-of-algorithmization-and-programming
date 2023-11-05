import "./Form.css";
import Input from "../Input/Input";
import { inputData } from "../../../data";

const Form = (props) => {
    return (
        <form className="form">
            <div className="form__wrapper">
                {inputData.map((input, index) => (
                    <div className="input__container" key={index + 1}>
                        <Input inputsColor={props.inputsColor[input.type]} type={input.type} key={index} placeholder={input.placeholder} setInputData={props.setInputData} setInputsColor={props.setInputsColor} />
                        <p className={`input__label ${props.inputsColor[input.type] === "red" ? "show" : ""}`} key={index + 2}>
                            {input.errorMessage}
                        </p>
                    </div>
                ))}
            </div>
        </form>
    );
};

export default Form;
