import React from "react"
import { Link, graphql, PageProps, useStaticQuery, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({
  data,
  location,
}) => {
  const siteTitle = data.site?.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <div id="mainvisual">
          <img
            src="/static/ec05aeeef2e0dd72c5ddc2addaa219b8/mainvisual.jpg"
            alt="テキストテキストテキスト"
          />
        </div>
        <section id="about" className="wrapper">
          <h2 className="section-title">About</h2>
          <div className="content">
            <img
              src="/static/636c36b3a89d33de600bc9bc6d094cd8/about.jpg"
              alt="テキストテキストテキスト"
            />
            <div className="text">
              <h3 className="content-title">KAKERU MIYAICHI</h3>
              <p>
                テキストテキストテキストテキストテキストテキストテキスト
                <br />
                テキストテキストテキストテキストテキストテキストテキスト
                <br />
                テキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
        </section>

        <section id="bicycle" className="wrapper">
          <h2 className="section-title">Bicycle</h2>
          <ul>
            <li>
              <img
                src="static/c5b65b015f992aa63d5c3a649204eda9/bicycle1.jpg"
                alt="テキストテキストテキスト"
              />
              <h3 className="content-title">タイトルタイトル</h3>
              <p>テキストテキストテキスト</p>
            </li>
            <li>
              <img
                src="/static/c5b65b015f992aa63d5c3a649204eda9/bicycle2.jpg"
                alt="テキストテキストテキスト"
              />
              <h3 className="content-title">タイトルタイトル</h3>
              <p>テキストテキストテキスト</p>
            </li>
            <li>
              <img
                src="/static/c5b65b015f992aa63d5c3a649204eda9/bicycle3.jpg"
                alt="テキストテキストテキスト"
              />
              <h3 className="content-title">タイトルタイトル</h3>
              <p>テキストテキストテキスト</p>
            </li>
          </ul>
        </section>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
