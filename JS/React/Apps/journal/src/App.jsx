import "./App.css";
import LeftSide from "../layout/LeftSide/LeftSide";
import Main from "../layout/Main/Main";
import Logo from "../components/Logo/Logo";
import EntryButton from "../components/EntryButton/EntryButton";
import { journalData } from "./data";
import { journalInfo } from "./data";
import JournalItem from "../components/JournalItem/JournalItem";
import { useState } from "react";
import BigInput from "../components/bigInput/bigInput";
import JournalInfo from "../components/JournalInfo/JournalInfo";

function App() {
    const [recordsToShow, setRecordsToShow] = useState(journalData);

    return (
        <>
            <LeftSide>
                <div className="logo__container">
                    <Logo />
                </div>
                <div className="entry__button-container">
                    <EntryButton />
                </div>
                <div className="journal__items-container">
                    {recordsToShow.map((record) => (
                        <JournalItem title={record.title} date={record.date} text={record.text} key={record.id} />
                    ))}
                </div>
            </LeftSide>
            <Main>
                <div className="header__container">
                    <BigInput className={"big__input"} type={"text"} placeholder={"Введите заголовок"} autofocus={true} />
                    <img className="header__icon" src="../../src/assets/images/archive.png" alt="archive" />
                </div>
                <div className="journal__data-container">
                    {journalInfo.map((item) => (
                        <JournalInfo icon={item.icon} title={item.title} inputType={item.inputType} inputPlaceholder={item.inputPlaceholder} inputAutofocus={item.inputAutofocus} key={item.id} />
                    ))}
                </div>
            </Main>
        </>
    );
}

export default App;
