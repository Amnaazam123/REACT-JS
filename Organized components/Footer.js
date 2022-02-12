//import it for JSX to work even though you do not use React in your file
import React from "react"

//send it to outside in any other file to use, we use `export default` with component.
export default function Footer() {
    return (
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}