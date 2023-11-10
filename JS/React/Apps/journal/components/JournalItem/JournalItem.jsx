import "./JournalItem.css";

const JournalItem = (props) => (
    <div className={`journal__item ${props.animateIn ? "animateIn" : ""}`}>
        <div className="jounral__item-wrapper">
            <p className="journal__item-title">{props.title}</p>
            <div className="journal__item-data">
                <p className="journal__item-date">{props.date}</p>
                <p className="journal__item-text">{props.text}</p>
            </div>
        </div>
    </div>
);

export default JournalItem;
