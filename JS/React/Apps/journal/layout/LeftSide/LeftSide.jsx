import "./LeftSide.css";

const LeftSide = ({ children }) => {
    return (
        <>
            <section className="left__side">{children}</section>
        </>
    );
};

export default LeftSide;
