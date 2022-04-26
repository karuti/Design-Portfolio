import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Header from "../components/Sections/Header.js"

import Footer from "../components/Sections/Footer.js"
import { H2, H1, H3, P, Caption } from "../components/TextStyles/textStyle"

import CTA from "../components/Sections/cta"
class WorkPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulWorkPortfolio
    const shareSlug = this.props.data.contentfulWorkPortfolio.slug
    const options = {
      renderNode: {
        [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
        [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
        [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
        [BLOCKS.PARAGRAPH]: (node, children) => <P>{children}</P>,
        [BLOCKS.EMBEDDED_ENTRY]: (node, children) => (
          <Link to={node.data.uri} target="_blank">
            {children}
          </Link>
        ),
        [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
          <Image>
            <img
              src={`https:${node.data.target.fields.file["en-US"].url}`}
              alt=""
            />
          </Image>
        ),
        [INLINES.EMBEDDED_ENTRY]: (node, children) => (
          <Link to={node.data.uri} target="_blank">
            {children}
          </Link>
        ),
        [INLINES.HYPERLINK]: (node, children) => {
          if (node.data.uri.includes("player.vimeo.com/video")) {
            return (
              <IframeContainer>
                <iframe
                  title="Unique Title 001"
                  src={node.data.uri}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </IframeContainer>
            )
          } else if (node.data.uri.includes("youtube.com/embed")) {
            return (
              <IframeContainer>
                <iframe
                  title="Unique Title 002"
                  src={node.data.uri}
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </IframeContainer>
            )
          } else {
            return (
              <Link to={node.data.uri} target="_blank">
                {children}
              </Link>
            )
          }
        },

        [INLINES.ENTRY_HYPERLINK]: (node, children) => (
          <Link to={node.data.uri} target="_blank">
            {children}
          </Link>
        ),
        [INLINES.ASSET_HYPERLINK]: (node, children) => (
          <Link to={node.data.uri} target="_blank">
            {children}
          </Link>
        ),
      },
      renderMark: {},
    }
    return (
      <Layout location={this.props.location}>
        <SEO
          title={post.metaTitle}
          description={post.metaDescription}
          // mainImage={`https:${post.image.file.url}`}
        />

        <Header />
        <Body>
          <BannerGroup>
            <Title>
              <H1>{post.projectTitle}</H1>
            </Title>
            <PostImage>
              {/* <img src={post.image.file.url} alt="" /> */}
            </PostImage>
          </BannerGroup>

          <BodyGroup>
            {documentToReactComponents(post.content.json, options)}
          </BodyGroup>
          <BottomCallToAction>
            <CTA ctatext="Like what you see?" buttontext="Get In Touch" />
          </BottomCallToAction>
        </Body>
        <Footer />
      </Layout>
    )
  }
}

export default WorkPostTemplate

export const WorkPostQuery = graphql`
  query WorkPostBySlug($slug: String!) {
    contentfulWorkPortfolio(slug: { eq: $slug }) {
      metaDescription
      metaTitle
      projectTitle
      slug
      content {
        raw
      }
      topics {
        topicTitle
      }
    }
  }
`
const BackContainerTop = styled.div`
  display: grid;
  justify-items: center;
  margin: 8em 0 -5.6em 0;
  padding: 0;
  overflow-x: hidden;
  @media (max-width: 32em) {
    margin: 8em 0 -5.6em 2em;
  }
`
const BackContainerBottom = styled.div`
  display: grid;
  justify-items: center;
  margin: 1.5em 0 8em 0;
  padding: 0;
  overflow-x: hidden;
  @media (max-width: 32em) {
    margin: 0.5em 0 6em 2em;
  }
`
const BackGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: flex-start;
  width: 60em;
  margin: 0;
  padding: 0;
  :hover {
    transform: scale(1.1) translate(2.5em, 0);
  }
`
const BackIcon = styled.img`
  align-self: center;
  height: 0.8em;
  margin: 0 0.4em 0 0;
  padding: 0;
`
const BackLabel = styled.div`
  align-self: center;
  font-weight: 600;
  font-size: 1em;
  color: #6c6c6c;
  margin: -0.1em 0 0 0;
  padding: 0;
`
const Body = styled.div`
  display: grid;
  justify-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`
const BannerGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  position: relative;
  max-width: 64em;
  margin: 8em 0 auto 0;
  padding: 0;
  @media (max-width: 32em) {
    margin: 8em 0 0 0;
    width: 20em;
  }
`
const Title = styled.div`
  display: grid;
  margin: 0 4em 0 2em;
  @media (max-width: 32em) {
    margin: 0 5em 0 0;
    font-size: 0.6em;
  }
`
const CategoryGroup = styled.div`
  display: grid;
  margin: 0.5em 0 1.5em 2.1em;
  padding: 0;
  @media (max-width: 32em) {
    margin: 0.5em 0 2.5em 0;
  }
`
const BlogCreatedDate = styled.div`
  display: grid;
  margin: 0em 0 2em 2.1em;
  padding: 0;
  font-size: 1em;
  font-weight: 600;
  color: #6c6c6c;
`
const AuthorGroup = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, auto);
  grid-gap: 20px;
  justify-content: flex-start;
  margin: 0 0 0 2em;
  padding: 0;
`
const AuthorPic = styled.div`
  margin: 0 0 0 2em;
  img {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    object-fit: cover;
  }
`
const AuthorDetails = styled.div`
  margin: -4px 0 0 0;
`
const AuthorName = styled(P)`
  padding: 0 0 0 0;
  font-size: 1.25em;
  margin: 0 0 0 0;
  font-weight: 800;
  color: #febd55;
`
const AuthorPosition = styled(Caption)`
  margin: 0 0.1em 0 0;
  padding: 0 0.5em 0 0;
  font-size: 1em;
  font-weight: 600;
`

const PostImage = styled.div`
  margin: 0;
  padding: 0;
  width: 64em;
  border: 0.05em solid #6c6c6c10;
  img {
    margin: 0;
    padding: 0;
    width: 64em;
    max-height: 45em;
    object-fit: cover;
  }
  @media (max-width: 32em) {
    display: grid;
    align-self: center;
    margin: 0 0 2em -3em;
    width: 26em;
  }
`
const Image = styled.div``

const BodyGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  justify-self: left;
  max-width: 40em;
  margin: 3em auto 4em 8em;
  padding: 0;
  img {
    margin: 1em 1em 1em 0;
    padding: 0;
    width: 39em;
    max-height: 40em;
    object-fit: contain;
  }
  a {
    font-size: 1em;
    font-weight: 600;
    line-height: 1.5;
    color: #febd55;
    text-decoration: none;
    cursor: pointer;
    margin: 0;
    padding: 0.1em;
    :hover {
      font-weight: 700;
      border-bottom: none;
      padding-bottom: 0;
    }
  }
  @media (max-width: 32em) {
    margin: 0 1em 2em 2.5em;
    width: 19em;
    img {
      margin: 1em 1em 1em 0;
      width: 18.5em;
    }
    p,
    a {
      margin: 0 1em 1em 0;
      width: 15em;
    }
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 1em 1em 1em 0;
      width: 10em;
    }
    ul,
    li {
      margin: 0 10em 0 0.5em !important;
      width: 12em !important;
    }
  }
`
//Bottom Call To Action
const BottomCallToAction = styled.div`
  position: relative;
  display: grid;
  max-width: 72em;
  margin: 200px 0px 280px 0px;
  padding: 0;
  @media (max-width: 768px) {
    width: 600px;
  }
  @media (max-width: 450px) {
    width: 20em !important;
    margin: 100px 0px;
  }
`
const CtaBackground = styled.div`
  position: absolute;
  z-index: 1;
  align-self: center;
`

const CtaContent = styled.div`
  position: relative;
  display: grid;
  max-width: 72em;
  background: #fefefe;
  box-shadow: 0 0.5em 2em #00000018;
  margin: 0 0 4em 0;
  padding: 2.5em 8em 7.5em 8em;
  @media (max-width: 32em) {
    width: 24em;
    margin: 0 0 4em 0;
    padding: 1em 2em 3em 2em;
  }
  @media (max-width: 450px) {
    width: 21em;
  }
`
const Tagline = styled(H2)`
  padding: 10px 0px 0px 0px;
  max-width: 900px;
  @media (max-width: 450px) {
    padding: 10px 0px 40px 0px;
    width: auto;
  }
`
const CtaText = styled.div`
  position: relative;
  align-self: center;

  color: #2a2a2a;
  max-width: 56em;

  z-index: 2;
  h2 {
    font-size: 3.25em;
  }
  @media (max-width: 32em) {
    width: 24em;
    margin: 0;
    padding: 0;
    h2 {
      font-size: 2.5em;
      margin: 1.2em 1.2em 1em 0;
    }
  }
  @media (max-width: 450px) {
    max-width: 360px;
    margin: 0;
    padding: 0;
  }
`

const CTAForm = styled.div`
  margin: -20px 0 0 0;
  max-width: 640px;
  display: flex;
  flex-direction: row;
  grid-gap: 20px;
  @media (max-width: 450px) {
    flex-direction: column;
  }
`
//Youtube video embed
const IframeContainer = styled.span`
  padding-bottom: 56.25%;
  position: relative;
  display: block;
  width: 100%;

  > iframe {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`
//Share buttons styling
const SocialshareButtons = styled.div`
  margin: 20px 000;
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: flex-start;
  grid-gap: 40px;
`
