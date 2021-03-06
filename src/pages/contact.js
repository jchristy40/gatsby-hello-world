import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Contact() {
    return (
        <div style={{ color: `teal` }}>
            <Link to="/">Home</Link>
            <Link to="/contact/">Contact</Link>
            <Link to="/about-css-modules/">CSS Modules</Link>
            <Header headerText="Contact Us" />
            <p>Send us a message!</p>
        </div>
    )
}