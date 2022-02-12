//import it for JSX to work even though you do not use React in your file
import React from "react"

//send it to outside in any other file to use, we use `export default` with component.
export default function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}