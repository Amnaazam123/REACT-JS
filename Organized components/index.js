import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"             //add your component in main file to use
import Footer from "./Footer"             //add your component in main file to use
import MainContent from "./MainContent"   //add your component in main file to use



function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))