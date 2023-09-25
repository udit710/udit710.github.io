import React, {Component} from "react";
import "./Message.css"
import { useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default class Message extends Component{
    render() {

        const variable = ["Web Developer👨🏻‍💻","Backend Developer⚙️","App Developer📱","Soccer Enthusiast⚽️","Gym Rat💪🏻"];
        var x = 0;
        function increment(){
            return x+=1;
        }


        return (
            <div className="page">
                <h1>Hi There! I am Udit Malshe</h1>
                <body>
                    <div className="hi">
                    AKA, <span className="title">{variable[x]}</span>
                    </div>
                </body>
            </div>
        );
    }
}
