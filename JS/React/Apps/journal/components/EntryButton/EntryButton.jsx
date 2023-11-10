import "./EntryButton.css";

const EntryButton = (props) => (
    <button className="entry__button" onClick={props.eraseInputs}>
        <div className="entry__button-wrapper">
            <img className="entry__button-icon" src="../../src/assets/images/plus.png" alt="plus" />
            <p className="entry__button-text">Новая запись</p>
        </div>
    </button>
);

export default EntryButton;
