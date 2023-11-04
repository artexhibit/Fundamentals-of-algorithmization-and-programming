import "./Form.css";
import Input from "../Input/Input";
import { inputData } from "../../../data";

const Form = (props) => {
    return (
        <form className="form">
            {inputData.map((input, index) => (
                <Input isInputGreen={props.isInputGreen[input.type]} type={input.type} key={index} placeholder={input.placeholder} setInputData={props.setInputData} setIsInputGreen={props.setIsInputGreen} />
            ))}
        </form>
    );
};

export default Form;
