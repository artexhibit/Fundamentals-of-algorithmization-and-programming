import "./SendButton.css";

const SendButton = (props) => (
    <button className="send__button" onClick={props.sendButtonClicked}>{props.text}</button>
);

export default SendButton;