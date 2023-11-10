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
        id: `${recordsToShow.length + 1}`,
        title: "",
        text: "",
    });
    const [indexToHide, setIndexToHide] = useState(recordsToShow.length + 1);

    function sendButtonClicked() {
        setNewEntryId();
        setDate();
        setIndexToHide(parseInt(newRecord.id));
        setRecordsToShow((prevData) => [newRecord, ...prevData]);
        animateNewEntry();
    }

    function receiveInputsValue(e) {
        setNewRecord((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    }

    function eraseDate() {
        setNewRecord((prevData) => ({
            ...prevData,
            date: "",
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
        eraseDate();
    }

    function animateNewEntry() {
        setTimeout(() => {
            let newEntry = document.querySelector(".journal__item.animateIn");
            newEntry.classList.toggle("animateIn");
            console.log(newEntry);
        }, 100);
    }

    function eraseInputs() {}

    return (
        <>
            <LeftSide>
                <div className="logo__container">
                    <Logo />
                </div>
                <div className="entry__button-container">
                    <EntryButton eraseInputs={eraseInputs} />
                </div>
                <div className="journal__items-container">
                    {recordsToShow.map((record) => (
                        <div className={`journal__item-container ${record.id === String(indexToHide) ? "animateIn" : ""}`} key={record.id}>
                            <JournalItem title={record.title} date={record.date} text={record.text} animateIn={record.id === String(indexToHide) ? true : false} />
                        </div>
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
                    <SendButton text={"Отправить"} sendButtonClicked={sendButtonClicked} />
                </div>
            </Main>
        </>
    );
}

export default App;
