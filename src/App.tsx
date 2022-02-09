import React, { ReactElement } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { items, ads } from "./assets/items";

import "./css/skeleton.css";
import "./css/normalize.css";

function adsRender(): ReactElement | undefined {
    if (ads.length > 0) {
        return (
            <div>
                <div className="container">
                    <h2>Our sponsors</h2>
                </div>
                <div className="container row ads">
                    {ads.map((item, i) => {
                        return (
                            <Card
                                i={i}
                                title={item.title}
                                subtitle={item.subtitle}
                                link={item.link}
                                cover={item.image}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
    return;
}

function App() {
    return (
        <div className="App">
            <Header></Header>
            <div className="container row">
                {items.map((item, i) => {
                    return (
                        <Card
                            i={i}
                            title={item.title}
                            subtitle={item.subtitle}
                            link={item.link}
                            cover={item.image}
                        />
                    );
                })}
            </div>
            {adsRender()}
            <Footer></Footer>
        </div>
    );
}

export default App;
