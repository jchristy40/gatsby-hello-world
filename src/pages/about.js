import React from "react"
import Header from "../components/header"

export default function About() {
    return (
        <div style={{ color: `teal` }}>
            <Header headerText="About this Site" />
            <Header headerText="It's okay" />
            <p>This is React</p>
        </div>
    )
}