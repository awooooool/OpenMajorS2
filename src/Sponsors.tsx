import Card from "./components/Card";
import { ads } from "./assets/items";

import "./css/skeleton.css";
import "./css/normalize.css";

function Sponsors(props: any) {
    return (
        <>
            <div className="container" style={{paddingTop:"20px"}}>
                <button onClick={() => { props.callback() }}>BACK</button>
            </div>
            <div className="container">
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
        </>
    );
}

export default Sponsors;
