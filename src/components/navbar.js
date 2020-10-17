import React from "react"
import { Link } from "gatsby"

class Navbar extends React.Component {
    state = { showMenu: false }
    toggleMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }
  render() {
    let menuActive = this.state.showMenu ? 'block':'hidden';
    return (
    <>
        <section id="nav-mobile">
        <div className="flex items-center justify-between px-4 py-3">
            <div className="nav-title">
                Stanley Oliveira
            </div>
            <div>
                <button onClick={this.toggleMenu}type="button" className="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                </svg>
                </button>
            </div>
        </div>
        <div className={menuActive}>
        <Link to="/"></Link><span className="block px-2 py-1 text-white font-semibold hover:bg-black">Home</span>
        <a href="https://github.com/iChosenStan" className="block px-2 py-1 text-white font-semibold hover:bg-black">Github</a>
        <Link to="/about"><span className="block px-2 py-1 text-white font-semibold hover:bg-black">Sobre</span></Link>
        </div>
        </section>

        <section id="nav-desktop">
            <div>
                <Link to="/">Home</Link>
                <a href="https://github.com/iChosenStan">Github</a>
                <Link to="/about">Sobre</Link>
            </div>
        </section>
    </>
    )
  }
}

export default Navbar
