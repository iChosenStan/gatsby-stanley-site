import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Todas as postagens" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (

            <article key={node.fields.slug} className="entry">
              <section className="image">
                <img src={node.frontmatter.thumbnail} alt="thumbnail" />
              </section>
              <section className="description">
                <h1 className="title">{title}</h1>
                <p className="date">
                {node.frontmatter.date} | 
                {node.frontmatter.tags.map((list, key) => {
                    return(
                    <span key={key} className={ list.style + " inline-block text-xs px-2 rounded-full lowercase font-semibold tracking-wide ml-1" }>
                        {list.tag}
                    </span>
                    )
                })}
                </p>         
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    <button className="btn_more bg-white">Leia mais</button>
                </Link>
              </section>
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
            description
            tags {
                tag
                style
            }
            thumbnail
          }
        }
      }
    }
  }
`
