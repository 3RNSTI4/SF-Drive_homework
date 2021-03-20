import React from "react";

import Header from "./../header.js";
import Questions from './questions.js';
import Footer from "./../footer.js";
import "./../../styles/FAQ/FAQmain.scss";

function FAQ(props) {
    return ( <
        >
        <
        Header / >
        <
        main className = "FAQmain" >
        <
        div className = "imgWrap" > < img className = "FAQimage"
        src = "assets/FAQpic.svg"
        alt = "" > < /img></div >
        <
        Questions / >
        <
        /main> <
        Footer / >
        <
        />
    );
}

export default FAQ;