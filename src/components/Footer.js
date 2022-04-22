import React from "react"
import Twitter from '../images/Twitter.png';
import Facebook from '../images/Facebook.png';
import Instagram from '../images/Instagram.png';
import Github from '../images/GitHub.png';

export default function Footer() {
    return (
        <footer>
            <ul>
                <li><img src={Twitter} /></li>
                <li><img src={Facebook} /></li>
                <li><img src={Instagram} /></li>
                <li><img src={Github} /></li>
            </ul>
        </footer>
    )
}