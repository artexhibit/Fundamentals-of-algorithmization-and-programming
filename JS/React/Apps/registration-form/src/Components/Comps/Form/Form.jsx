import "./Form.css";
import Input from "../Input/Input";
import { inputData } from "../../../data";

const Form = (props) => {
    return (
        <form className="form">
            {inputData.map((input, index) => (
                <div className="input__container" key={index+1}>
                    <Input inputsColor={props.inputsColor[input.type]} type={input.type} key={index} placeholder={input.placeholder} setInputData={props.setInputData} setInputsColor={props.setInputsColor} />
                    <p className={`input__label ${props.inputsColor[input.type] === "red" ? "show" : "" }`} key={index+2}>{props.inputLabelsErrorMessage[input.type]}</p>
                </div>
            ))}
        </form>
    );
};

export default Form;
