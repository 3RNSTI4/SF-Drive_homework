import React from "react";
import { Route, Switch } from "react-router-dom";

import AboutUs from "./aboutUs/AboutUs.js";
import FAQ from "./FAQ/FAQ.js";

function App() {

    return ( <
        >
        <
        Switch >
        <
        Route path = "/AboutUs"
        className = "page"
        id = "aboutUs" > < AboutUs / > < /Route> <
        Route path = "/FAQ"
        className = "page"
        id = "FAQ" > < FAQ / > < /Route> <
        /Switch> <
        />);
    }

    export default App;