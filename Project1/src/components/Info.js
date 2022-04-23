import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import React from "react"
import Email from '../images/Email.png';
import LinkedIn from '../images/LinkedIn.png';

export default function Info() {
    return (
        <div className="info">
            <div className="info--profile">
            </div>
            <div className="info--details">
                <h1 className="details--title">Porsche</h1>
                <h2 className="details--job">Automobile Manufacturer</h2>
                <h3 className="details--web">porsche.com</h3>
            </div>
            <div className="info--button">
                <button><img src={Email} className="button"/></button>                
                <button><img src={LinkedIn} className="button"/></button>
            </div>
        </div>
    )
}