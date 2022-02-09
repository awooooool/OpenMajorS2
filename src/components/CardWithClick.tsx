import React from "react";

import "../css/skeleton.css";
import "../css/normalize.css";
import "../css/components.css";
import { motion } from "framer-motion";
import sponsor from '../assets/sponsor.jpg'

function CardWithClick(props: any) {
    const variants = {
        visible: (i: any) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeIn",
                type: "spring",
                stiffness: 50,
            },
        }),
        hidden: { opacity: 0, y: 200 },
    };

    const click = () => {
        props.props.callback()
    }

    return (
        <a onClick={click} target="_blank" rel="noopener noreferrer">
            <motion.div
                className="Card four columns"
                initial="hidden"
                animate="visible"
                custom={props.i}
                variants={variants}
            >
                <img className="cover" src={sponsor} alt=""></img>
                <div className="data">
                    <h2>Sponsors</h2>
                    <p>Sponsors kami</p>
                </div>
            </motion.div>
        </a>
    );
}

export default CardWithClick;
