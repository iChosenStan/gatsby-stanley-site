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
            <h1 className="author-name">Stanley Oliveira</h1>
            <p><i className="lni-map-marker"></i> Natal - RN</p>
            <p><i className="lni-facebook"></i> facebook.com/iChosenStan</p>
            <p><i className="lni-envelope"></i> stanleyufrn@gmail.com</p>

            <div className="stats">
                <span className="stat">CAFÉ</span>
                <span className="stat w-3/4">BACKEND</span>
                <span className="stat w-2/5">FRONTEND</span>
                <span className="stat w-2/5">SEO</span>
            </div>

            <div className="fun-fact">
                <div className="fun-fact-figure">
                </div>
                <h2>Quem sou</h2>
                <p>
                Sou um bípede baseado em carbono 14 e descendente de primatas. Assim, é defeituoso e virtuoso.
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
      <br>
		  </br>
      © 2020 - 2021 Página feita em GatsbyJS por <a href="https://stanley.net.br/humans.txt">Stanley de Oliveira</a>.
    </footer>
    </>
    )
  }
}

export default Layout
