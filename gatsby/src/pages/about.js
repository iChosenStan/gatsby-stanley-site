import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <section id="about-me">
            <SEO title="About Me" />
            <h1>About Me</h1>
            <p>I am Kristian Espina, a Chemical Engineer with a deep passion in programming. I’ve ranked 7th Place out of 2,834 takers on the national licensure examination for chemical technicians with a rating of (90.00%). Currently, I am studying for my board examinations for chemical engineering. Although, I am a chemical engineer, I’ve noticed the gap in knowledge of most chemical engineers in the importance of high level computing. Hence, I am considering MSc. Computer Science this coming 2020.</p>
            
            <h3 className="mt-5">Education</h3>
            <h4 className="mb-0 mt-3 font-bold">BSc. Chemical Engineering</h4>
            <p>Batangas State University, ABET Accredited</p>
            <p>2014-2019</p>

            <h4 className="mb-0 mt-3 font-bold">Secondary Education</h4>
            <p>St. Bridget College - Batangas</p>
            <p className="italic">With Honors</p>

            
            <h3 className="mt-5">Tools & Technologies</h3>
            <h4 className="mb-0 mt-3 font-bold">Frontend Web Development</h4>
            <p>- HTML/(S)CSS/Javascript</p>
            <p>- ReactJS, GatsbyJS, VueJS</p>


            <h4 className="mb-0 mt-3 font-bold">Backend Web Development</h4>
            <p>- node.js</p>
            <p>- PHP</p>
            <p>- GraphQL, MongoDB, MySQL (MariaDB)</p>


            <h4 className="mb-0 mt-3 font-bold">Mobile App Development</h4>
            <p>- Apache Cordova, Crosswalk (Hybrid Mobile App)</p>
            <p>- Kotlin</p>
            
            <h4 className="mb-0 mt-3 font-bold">Programming Language</h4>
            <p>- C/C++/C#</p>
            <p>- Python</p>
            <p>- Swift</p>
            
            <h4 className="mb-0 mt-3 font-bold">Machine Learning</h4>
            <p>- PyTorch</p>
            <p>- Tensorflow (GPU)</p>
            <p>- fast.ai</p>

            <h3 className="mt-5">Relevant Projects</h3>
            <h4 className="mb-0 mt-3 font-bold">Hybrid Mobile App (Android)</h4>
            <p><a className="mr-2" href="https://github.com/kristianespina/KawaiMIDIPassthrough">Kawai Digital MIDI Passthrough App</a></p>
            <p><a className="mr-2" href="https://github.com/kristianespina/colligative-properties-app">Colligative Properties Calculator App</a> </p>
            <p><a className="mr-2" href="https://github.com/kristianespina/Equations-Of-State-Calculator">Thermodynamics Calculator</a></p>

            <h4 className="mb-0 mt-3 font-bold">Web Development</h4>
            <p><a className="mr-2" href="https://github.com/kristianespina/gatsby-kristian-page">www.espina.dev</a></p>
            <p><a className="mr-2" href="https://rathena.org/board/files/file/3896-fluxcp-theme-brynhild-blue/">FluxCP Theme (PHP)</a></p>

            <h4 className="mb-0 mt-3 font-bold">Desktop Development</h4>
            <p><a className="mr-2" href="https://github.com/kristianespina/RagnarokPy-Bot">Game Automation (Bot) for Philippine Ragnarok Online (Python/C#)</a></p>
            <p><a className="mr-2" href="https://github.com/kristianespina/Steam-Table-SVM-Regression">Steam Table SVM Regression Script</a></p>
            <p><a className="mr-2" href="https://github.com/kristianespina/Acetic-Acid-Adsorption-Charcoal-Statistical-Model">Acetic Acid Adsorption Model for Charcoal</a></p>

            <h4 className="mb-0 mt-3 font-bold">Scripting</h4>
            <p><a className="mr-2" href="https://github.com/kristianespina/compass.com-scrapy">compass.com scraper for agents</a></p>
            <p><a className="mr-2" href="https://github.com/kristianespina/BatStateU-Newscraper">BatStateU Newscraper</a></p>
            <p><a className="mr-2" href="https://github.com/kristianespina/Python-EXIF-Matching">Image Metadata EXIF Matching</a></p>

            <h3 className="mt-5">Accomplishments</h3>
            <h4 className="mb-0 mt-3 font-bold">7th Placer - 2019 Chemical Technician Licensure Examination (90.00% Rating)</h4>
            <p>Philippine Regulation Commission (PRC)</p>
            <p>October 2019</p>

            <h4 className="mb-0 mt-3 font-bold">1st Runner Up - Philippine Consortium for Science, Mathematics, and Technology (PCSMT) – Chemistry Category</h4>
            <p>University of Northern Philippines, Vigan City, Ilocos Sur</p>
            <p>December 2018</p>

            <h4 className="mb-0 mt-3 font-bold">Champion - PIChE Quiz Bowl</h4>
            <p>Philippine Institute of Chemical Engineers - Junior Chapter Batangas</p>
            <p>August 2017</p>

            <h4 className="mb-0 mt-3 font-bold">DOST JLSS Scholar (MERIT LEVEL)</h4>
            <p>Department of Science and Technology (DOST)</p>
            <p>2016-2019</p>

            <h4 className="mb-0 mt-3 font-bold">Champion - 4th RealITy Quiz Show 2014 (IT Quiz Show)</h4>
            <p>Cisco Laboratory, Lycuem of the Philippines - Laguna</p>
            <p>February 2014</p>

            <h4 className="mb-0 mt-3 font-bold">Champion - MCL Cup 2013 – I-TECH: The Ultimate IT Quiz Challenge</h4>
            <p>Malayan Colleges Laguna</p>
            <p>November 2013</p>


        </section>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
