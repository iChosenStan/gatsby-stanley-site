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
            <h1>Sobre mim</h1>
            <p>I am Kristian EspinaOlá eu sou Stanley, nas redes sociais como iChosenStan, técnico em programação Web, apaixonado por tecnologia.</p>
            
            <h3 className="mt-5">Educação</h3>
            <h4 className="mb-0 mt-3 font-bold">Programação de computadores enfase WEB</h4>
            <p>Instituto Metropole Digital - IMD / Universidade Federal do Rio Grande do Norte - UFRN</p>
            <p>2009-2011</p>

            <h4 className="mb-0 mt-3 font-bold">Bacharelado em Tecnologia da Informação</h4>
            <p>Instituto Metropole Digital - IMD / Universidade Federal do Rio Grande do Norte - UFRN</p>
            <p>2016-2020</p>
            <p className="italic">incompleto</p>

            <h3 className="mt-5">Co-Fundador, desenvolvedor e administrador</h3>
            <h4 className="mb-0 mt-3 font-bold">Ragnarok-meeting - servidor privado de ragnarok</h4>
            <p>- Servidor em C/C++/MySQL</p>
            <p>- Site, Fórum e Painel - PHP/HTML/CSS/Javascript/MySQL</p>
            <p>2011</p>

            <h3 className="mt-5">Fundador, desenvolvedor e administrador</h3>
            <h4 className="mb-0 mt-3 font-bold">BrasilRag - servidor privado de ragnarok</h4>
            <p>- Servidor em C/C++/MySQL</p>
            <p>- Site, Fórum e Painel - PHP/HTML/CSS/Javascript/MySQL</p>
            <p>2012</p>

            <h3 className="mt-5">Fundador, desenvolvedor e administrador</h3>
            <h4 className="mb-0 mt-3 font-bold">RagnarokBurn - servidor privado de ragnarok</h4>
            <p>- Servidor em C/C++/MySQL</p>
            <p>- Site, Fórum e Painel - PHP/HTML/CSS/Javascript/MySQL</p>
            <p>2013</p>

            <h3 className="mt-5">Comunity Master</h3>
            <h4 className="mb-0 mt-3 font-bold">BrasilRO - servidor privado de ragnarok</h4>
            <p>- Servidor privado com mais jogadores da época</p>
            <p>- Fórum e in-game support</p>
            <p>2014</p>

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
