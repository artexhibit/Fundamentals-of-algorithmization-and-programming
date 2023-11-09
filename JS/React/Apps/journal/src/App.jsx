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
import TextInput from "../components/TextInput/TextInput";
import SendButton from "../components/SendButton/SendButton";

function App() {
    const [recordsToShow, setRecordsToShow] = useState(journalData);
    const [newRecord, setNewRecord] = useState({
        date: "",
        id: "4",
        title: "",
        text: "",
    });

    function sendButtonClicked() {
        setNewEntryId();
        setDate();
        setRecordsToShow((prevData) => [newRecord, ...prevData]);
    }

    function receiveInputsValue(e) {
        setNewRecord((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    }

    function setNewEntryId() {
        setNewRecord((prevData) => ({
            ...prevData,
            id: `${parseInt(prevData.id) + 1}`,
        }));
    }

    function setDate() {
        let dateToSet = "";

        if (newRecord.date === "") {
            const date = new Date();
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            dateToSet = `${day}.${month}.${year}`;
        } else {
            const dateParts = newRecord.date.split("-");
            dateToSet = `${dateParts[2]}.${dateParts[1]}.${dateParts[0]}`;
        }
        newRecord.date = dateToSet;
    }

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
                    <BigInput type={"text"} name={"title"} placeholder={"Введите заголовок"} autofocus={true} receiveInputsValue={receiveInputsValue} />
                    <img className="header__icon" src="../../src/assets/images/archive.png" alt="archive" />
                </div>
                <div className="journal__data-container">
                    {journalInfo.map((item) => (
                        <JournalInfo icon={item.icon} title={item.title} inputType={item.inputType} inputPlaceholder={item.inputPlaceholder} inputAutofocus={item.inputAutofocus} key={item.id} receiveInputsValue={receiveInputsValue} />
                    ))}
                </div>
                <div className="journal__text-container">
                    <TextInput placeholder={"Опишите свой день"} name={"text"} receiveInputsValue={receiveInputsValue} />
                </div>
                <div className="send__button-container">
                    <SendButton text={"Отправить"} onClick={sendButtonClicked} />
                </div>
            </Main>
        </>
    );
}

export default App;
