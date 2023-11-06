import "./App.css";
import LeftSide from "../layout/LeftSide/LeftSide";
import Main from "../layout/Main/Main";
import Logo from "../components/Logo/Logo";
import EntryButton from "../components/EntryButton/EntryButton";
import { journalData } from "./journalData";
import JournalItem from "../components/JournalItem/JournalItem";

function App() {
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
                    {journalData.map((item) => (
                        <JournalItem title={item.title} date={item.date} text={item.text} key={item.id} />
                    ))}
                </div>
            </LeftSide>
            <Main></Main>
        </>
    );
}

export default App;
