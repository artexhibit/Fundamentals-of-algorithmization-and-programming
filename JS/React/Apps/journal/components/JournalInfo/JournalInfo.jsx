import "./JournalInfo.css";

const JournalInfo = (props) => (
    <div className="journal__info">
        <img className="journal__info--icon" src={props.icon} alt="icon" />
        <p className="journal__info-title">{props.title}</p>
        <input className={"journal__info-input"} type={props.inputType} placeholder={props.inputPlaceholder} autoFocus={false} />
    </div>
);

export default JournalInfo;
