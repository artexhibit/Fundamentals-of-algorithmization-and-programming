import SmallInput from "../SmallInput/SmallInput";
import "./JournalInfo.css";

const JournalInfo = (props) => (
    <div className="journal__info">
        <div className="journal__info-wrapper">
            <img className="journal__info--icon" src={props.icon} alt="icon" />
            <p className="journal__info-title">{props.title}</p>
            <SmallInput type={props.inputType} placeholder={props.inputPlaceholder} autoFocus={false} />
        </div>
    </div>
);

export default JournalInfo;
