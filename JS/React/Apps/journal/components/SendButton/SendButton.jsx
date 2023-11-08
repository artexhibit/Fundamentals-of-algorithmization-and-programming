import "./SendButton.css";

const SendButton = (props) => (
    <button className="send__button" onClick={props.onClick}>{props.text}</button>
);

export default SendButton;