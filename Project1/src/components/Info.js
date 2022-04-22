import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import React from "react"
import Email from '../images/Email.png';
import LinkedIn from '../images/LinkedIn.png';

export default function Info() {
    return (
        <div>
            <div>
                <img src="https://i.pinimg.com/236x/2c/29/06/2c2906f381cdc5b8595bd140dfb7bd01.jpg" className="profile--picture"/>
            </div>
            <div>
                <h1>Porsche</h1>
                <h2>Automobile Manufacturer</h2>
                <h3>porsche.com</h3>
            </div>
            <div>
                <button><img src={Email} className="button"/></button>                
                <button><img src={LinkedIn} className="button"/></button>
            </div>
        </div>
    )
}