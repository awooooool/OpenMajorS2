import React, { ReactElement, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { items, ads } from "./assets/items";

import "./css/skeleton.css";
import "./css/normalize.css";
import MainMenu from "./MainMenu";
import Sponsors from "./Sponsors";
import CardWithClick from "./components/CardWithClick";



function App() {
    const [clicked, setClicked] = useState(true);

    const setClick = () => {
      clicked ? setClicked(false) : setClicked(true)
    }

    return (
        <div className="App">
            <Header></Header>
            {clicked ? <MainMenu callback={setClick}/> : <Sponsors callback={setClick} /> }
            <Footer></Footer>
        </div>
    );
}

export default App;