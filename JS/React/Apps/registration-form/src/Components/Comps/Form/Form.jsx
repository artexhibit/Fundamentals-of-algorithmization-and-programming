import "./Form.css";
import Input from "../Input/Input";
import { inputData } from "../../../data";

const Form = (props) => {
    return (
        <form className="form">
            {inputData.map((input, index) => (
                <Input inputsColor={props.inputsColor[input.type]} type={input.type} key={index} placeholder={input.placeholder} setInputData={props.setInputData} setInputsColor={props.setInputsColor} />
            ))}
        </form>
    );
};

export default Form;
