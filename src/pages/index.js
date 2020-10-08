import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/">Home</Link>
      <Link to="/contact/">Contact</Link>
      <Link to="/about-css-modules/">CSS Modules</Link>
      <Header headerText="Homepage" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}