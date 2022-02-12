//import it for JSX to work even though you do not use React in your file
import React from "react"

//send it to outside in any other file to use, we use `export default` with component.
export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./react-logo.png" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
