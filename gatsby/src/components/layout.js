import React from "react"
//import { Link } from "gatsby"
import Navbar from "./navbar"
class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
    <>
      <div id="content">
        <header id="main-header">
        <Navbar />
        </header>
        <section id="sidebar">
            <div className="avatar-container">
                <div className="avatar"></div>
            </div>
            <h1 className="author-name">Kristian Espina</h1>
            <p><i className="lni-map-marker"></i> Batangas City, Philippines</p>
            <p><i className="lni-linkedin"></i> linkedin.com/in/kristian-espina</p>
            <p><i className="lni-envelope"></i> kristian@espina.dev</p>

            <div className="stats">
                <span className="stat">COFFEE</span>
                <span className="stat w-3/4">PYTHON</span>
                <span className="stat w-3/5">FRONTEND</span>
                <span className="stat w-2/5">SEO</span>
            </div>

            <div className="fun-fact">
                <div className="fun-fact-figure">
                </div>
                <h2>Fun Fact</h2>
                <p>
                    I graduated BS Chemical Engineering at Batangas State University last June 2019. I took up the Oct ‘19 Chemical Technician Board Exams and ranked 7th. Right now I am studying for the November ‘19 Chemical Engineering Board Exams.
                </p>
            </div>
        </section>
        <section id="main"> 
            <main>{children}</main>
            <div className="container">
            </div>
        </section>
      </div>
    <footer>
        A GatsbyJS Theme by Kristian Espina. All Rights Reserved.
    </footer>
    </>
    )
  }
}

export default Layout
