import Info from "./components/Info.js"
import Footer from "./components/Footer.js"
import React from "react"

export default function Card() {
    return (
        <div id="content">
            <div id="core">
                <Info />
                <Footer />
            </div>
        </div>
    )
}