import "./Form.css";
import Input from "../Input/Input";
import { inputData } from "../../../data";

const Form = (props) => {
    return (
        <form className="form">
            {inputData.map((input, index) => (
                <Input type={input.type} key={index} placeholder={input.placeholder} setEmail={props.setEmail} />
            ))}
        </form>
    );
};

export default Form;
