import * as React from "react"
import "./TitleBar.scss"

const TitleBar = props => {
    return (
        <div class="titlebar">
            <h1>{props.title}</h1>
            dark mode toggle
        </div>
    );
}

export default TitleBar