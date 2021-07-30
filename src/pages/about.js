import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Header from "../components/Sections/Header.js"

import Footer from "../components/Sections/Footer.js"
import {
  H2,
  P,
  HeadingIntroBig,
  BigHeading,
} from "../components/TextStyles/textStyle"

import CTA from "../components/Sections/cta"

function About() {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <Introsection>
        <Contentwrapper>
          <Title1>Get to know me</Title1>
        </Contentwrapper>
      </Introsection>
      <AboutSection>
        <Mypic>
          {" "}
          <img style={{ borderRadius: "4%" }} src="images/joy.jpg" alt="" />
        </Mypic>
        <Contentrow>
          <DetailsReadfirst>
            Hi, I’m Karuti Joy. I am a UX/UI designer and creative developer
            based Nairobi, Kenya. I am a software engineering graduate who is
            also pursuing an MBA.
          </DetailsReadfirst>
          <Details>
            I think understanding the human experience is essential for creating
            useful,usable and effective products that make life easier. I enjoy
            using my skill-set to empower people to accomplish their goals.
          </Details>
          <Details>
            My satisfaction as a designer is to have a product that is usable
            and used.This is a collection of design projects that i have worked
            on.It’s a mixture of work projects and freelance projects.
          </Details>
          <Details>
            My development stack is focused on performance & SEO optimized
            sites. I create blazing fast web experience using Gatsby js and
            headless CMSs.
          </Details>
          <Details>
            Services I offer include:
            <li>UX/UI design</li>
            <li> Website development</li>
            <li>SEO Optimization</li>
            <li>Digital Ads Management</li>
          </Details>
        </Contentrow>
      </AboutSection>
      <ToolsSection>
        <TitleSection>
          <ToolsTitle>Tools</ToolsTitle>
          <ToolsTitle style={{ paddingLeft: "60px" }}>& Tech </ToolsTitle>
        </TitleSection>
        <DetailsSection>
          <ToolRow>
            <li>Sketch</li>
            <li>Figma</li>
            <li>Gatsby Js</li>
            <li>HTML</li>
            <li>CSS</li>
          </ToolRow>
          <ToolRow>
            <li>Design Thinking</li>
            <li>React</li>
            <li>Contentful</li>
            <li>Wordpress</li>
            <li>Zeplin</li>
          </ToolRow>
        </DetailsSection>
      </ToolsSection>
      <CTA ctatext="Lets Work Together" buttontext="Get In Touch" />
      <Footer />
    </Layout>
  )
}

export default About

const Introsection = styled.div`
  max-width: 1280px;
  margin: 160px auto;
`
const Contentwrapper = styled.div`
  max-width: 840px;
`

const Title1 = styled(HeadingIntroBig)`
  padding: 20px 0px 20px 0px;
`
const AboutSection = styled.div`
  max-width: 1280px;
  margin: 160px auto;
  display: grid;
  grid-template-columns: 600px 600px;
  grid-gap: 80px;
`
const Contentrow = styled.div``
const Mypic = styled.div`
  padding: 40px 000;
`

const DetailsReadfirst = styled(H2)``
const Details = styled(P)``
const ToolsSection = styled.div`
  max-width: 1280px;
  margin: 160px auto;
  display: grid;
  grid-template-columns: 600px 600px;
  grid-gap: 80px;
`
const TitleSection = styled(BigHeading)``
const ToolsTitle = styled(BigHeading)``
const DetailsSection = styled.div`
  display: grid;
  grid-template-columns: 160px auto auto;
  grid-gap: 80px;
`
const ToolRow = styled(P)``
