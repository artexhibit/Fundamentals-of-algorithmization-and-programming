import "./EntryButton.css";

const EntryButton = () => (
    <button className="entry__button">
        <div className="entry__button-wrapper">
            <img className="entry__button-icon" src="../../src/assets/images/plus.png" alt="plus" />
            <p className="entry__button-text">Новая запись</p>
        </div>
    </button>
);

export default EntryButton;
