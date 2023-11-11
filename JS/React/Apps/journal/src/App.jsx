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
    const [indexToAnimateIn, setIndexToAnimateIn] = useState(recordsToShow.length + 1);
    const [indexToAnimateOut, setIndexToAnimateOut] = useState(0);
    const [canEraseValue, setCanEraseValue] = useState(false);

    function sendButtonClicked() {
        setNewEntryId();
        setDate();
        setIndexToAnimateIn(parseInt(newRecord.id));
        setRecordsToShow((prevData) => [newRecord, ...prevData]);
        animateNewEntry();
        eraseInput();

        if (recordsToShow.length === 5) {
            setIndexToAnimateOut(parseInt(findSmallestIndex()));
            removeLastEntry();
        }
    }

    function findSmallestIndex() {
        return recordsToShow.reduce((min, current) => {
            return current.id < min ? current.id : min;
        }, recordsToShow[0].id);
    }

    function receiveInputsValue(e) {
        setCanEraseValue(false);

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
            dateToSet = todaysDate(".");
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
        }, 400);
    }

    function removeLastEntry() {
        setTimeout(() => {
            setRecordsToShow((prevData) => {
                return [...prevData.slice(0, prevData.length - 1)];
            });
        }, 500);
    }

    function eraseInput() {
        setNewRecord((prevData) => ({
            ...prevData,
            title: "",
            text: "",
            date: `${todaysDate("-")}`,
        }));
        setCanEraseValue(true);
    }

    function todaysDate(separator) {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${day}${separator}${month}${separator}${year}`;
    }

    return (
        <>
            <LeftSide>
                <div className="logo__container">
                    <Logo />
                </div>
                <div className="entry__button-container">
                    <EntryButton eraseInput={eraseInput} />
                </div>
                <div className="journal__items-container">
                    {recordsToShow.map((record) => (
                        <div className={`journal__item-container ${record.id === String(indexToAnimateIn) ? "animateIn" : ""}`} key={record.id}>
                            <JournalItem title={record.title} date={record.date} text={record.text} animateIn={record.id === String(indexToAnimateIn) ? true : false} animateOut={record.id === String(indexToAnimateOut) ? true : false} />
                        </div>
                    ))}
                </div>
            </LeftSide>
            <Main>
                <div className="header__container">
                    <BigInput type={"text"} name={"title"} placeholder={"Введите заголовок"} autofocus={true} receiveInputsValue={receiveInputsValue} canEraseValue={canEraseValue} currentValue={newRecord.title} />
                    <img className="header__icon" src="../../src/assets/images/archive.png" alt="archive" />
                </div>
                <div className="journal__data-container">
                    {journalInfo.map((item) => (
                        <JournalInfo icon={item.icon} title={item.title} inputType={item.inputType} inputPlaceholder={item.inputPlaceholder} inputAutofocus={item.inputAutofocus} key={item.id} receiveInputsValue={receiveInputsValue} />
                    ))}
                </div>
                <div className="journal__text-container">
                    <TextInput placeholder={"Опишите свой день"} name={"text"} receiveInputsValue={receiveInputsValue} canEraseValue={canEraseValue} currentValue={newRecord.text} />
                </div>
                <div className="send__button-container">
                    <SendButton text={"Отправить"} sendButtonClicked={sendButtonClicked} />
                </div>
            </Main>
        </>
    );
}

export default App;
