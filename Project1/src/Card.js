import Info from "./components/Info.js"
import About from "./components/About.js"
import Interests from "./components/Interests.js"
import Footer from "./components/Footer.js"
import React from "react"

export default function Card() {
    return (
        <div>
            <div>
                <Info />
           </div>
            <main>
                <About />
                <Interests />
            </main>
            <Footer />
        </div>
    )
}