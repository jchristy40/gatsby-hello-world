import React from "react"
import styles from "./about-css-modules.module.css"
import Header from "../components/header"
import { Link } from "gatsby"

import Container from "../components/container"

console.log(styles)

const User = props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="" />
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default function About() {
    return (
        <Container>
            <Link to="/">Home</Link>
            <Link to="/contact/">Contact</Link>
            <Link to="/about-css-modules/">CSS Modules</Link>
            <Header headerText="Playing with css modules" />
            <p>This CSS comes from a 'CSS Module'</p>

            <User 
                username="JJ Watt"
                avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
                excerpt="I'm JJ Watt"
            />
            <User 
                username="James Harden"
                avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
                excerpt="I'm JJ Harden"
            />
        </Container>
    )
}