import Card from "./components/Card";
import { items } from "./assets/items";

import "./css/skeleton.css";
import "./css/normalize.css";
import CardWithClick from "./components/CardWithClick";



function MainMenu(props: any) {
    return (
        <div className="container row">
            {items.map((item, i) => {
                return (
                    <>
                        <Card
                            i={i}
                            title={item.title}
                            subtitle={item.subtitle}
                            link={item.link}
                            cover={item.image}
                        />
                    </>

                );
            }
            )}
            <CardWithClick props={props} />
        </div>
    );
}

export default MainMenu;
