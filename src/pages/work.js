import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Header from "../components/Sections/Header.js"
import { Link } from "gatsby"

import Footer from "../components/Sections/Footer.js"
import {
  H2,
  P,
  HeadingIntroBig,
  HeadingLongTxt,
  H1,
  H4,
} from "../components/TextStyles/textStyle"

import CTA from "../components/Sections/cta"

function Work() {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />

      <MainImage>
        <img src="/images/fp case study.jpg" alt="" />
      </MainImage>
      <Contentwrapper>
        <Link to="https://fieldproapp.com/">
          {" "}
          <Title1>FieldPro by Optimetriks</Title1>
        </Link>
        <SmallDescription>
          FieldPro is a Saas solution for the field force automation domain.The
          service is marketed towards African and Latin American markets and the
          target customers are distributor and manufacturers who need to keep
          track of their field operations.
          <br></br>
          <br></br>
          The product seeks to solve the problem of digitizing the process of
          data collection by field agents of various brands.This benefits the
          brands by helping to easily manage their day-to-day field operations
          with real time data and achieve high levels of efficiency.
          <br></br>
          <br></br>
          The service is cloud based, and is accessed through their mobile and
          web platforms.The service can also be integrated with other existing
          software platforms such as freshdesk,zendesk and works as an
          integrated part of that solution.
          <br></br>
          <br></br>
          My role here is to translate requirements into easy to use design that
          can be implemented into the systems.
        </SmallDescription>
        <RolesTitle>Key Skills</RolesTitle>
        <SmallDescription>
          <ul>
            <li> User Research </li>
            <li> Wireframing </li>
            <li> Visual Design </li>
            <li> Prototyping </li>
            <li> Digital Marketing </li>
            <li> Coding </li>
          </ul>
        </SmallDescription>
        <RolesTitle>Collaborators</RolesTitle>
        <SmallDescription>
          <ul>
            <li> Product team </li>
            <li> Marketing team </li>
            <li> Developers </li>
            <li> Customer success team </li>
          </ul>
        </SmallDescription>
      </Contentwrapper>
      <TTWrapper>
        <Title>Selected Case studies on this project</Title>
        <Workrow>
          <Link to="/brand-awareness">
            <ProjectInstance>
              <ProjectCover>
                {" "}
                <img src="/images/bg-dark.jpg" alt="" />
              </ProjectCover>
              <ProjectContent>
                <ProjectTitle>Brand awareness and positioning</ProjectTitle>
                <Projecttag>Marketing</Projecttag>
              </ProjectContent>
            </ProjectInstance>
          </Link>
          <Link to="/bulk-upload-challenges">
            <ProjectInstance>
              <ProjectCover>
                {" "}
                <img src="/images/bg-dark.jpg" alt="" />
              </ProjectCover>
              <ProjectContent>
                <ProjectTitle>
                  How to make it easy for users to upload items in bulk using
                  csv?
                </ProjectTitle>
                <Projecttag>Web App</Projecttag>
              </ProjectContent>
            </ProjectInstance>
          </Link>
          <Link to="/acessible-support">
            <ProjectInstance>
              <ProjectCover>
                {" "}
                <img src="/images/bg-small.png" alt="" />
              </ProjectCover>
              <ProjectContent>
                <ProjectTitle>
                  How to make users aware of our help center?
                </ProjectTitle>
                <Projecttag>Support</Projecttag>
              </ProjectContent>
            </ProjectInstance>
          </Link>
          <Link to="/conditions">
            <ProjectInstance>
              <ProjectCover>
                {" "}
                <img src="/images/bg-small.png" alt="" />
              </ProjectCover>
              <ProjectContent>
                <ProjectTitle>Conditional Design</ProjectTitle>
                <Projecttag>Web</Projecttag>
              </ProjectContent>
            </ProjectInstance>
          </Link>
        </Workrow>
      </TTWrapper>
      <CTA ctatext="Like what you see?" buttontext="Get In Touch" />
      <Footer />
    </Layout>
  )
}

export default Work
const TTWrapper = styled.div`
  max-width: 1280px;
  margin: 160px auto;
  @media (max-width: 450px) {
    max-width: 350px;
    margin: 0;
  }
`

const Contentwrapper = styled.div`
  max-width: 840px;
  margin: 0 auto;
`
const MainImage = styled.div`
  max-width: 1280px;
  height: 400px;
  margin: 0px auto 80px auto;
  background-color: #21c7f7;
  @media (max-width: 768px) {
    max-width: 720px;
    margin: 80px 0 120px 0;
  }
  @media (max-width: 450px) {
    max-width: 350px;
    margin: 80px 0 120px 0;
  }
`
const Title = styled(H1)`
  margin-bottom: 40px;
  @media (max-width: 450px) {
    margin: 0 24px 60px 24px;
  }
`
const SmallDescription = styled(P)``
const Title1 = styled(HeadingLongTxt)`
  padding: 20px 0px 20px 0px;
  font-weight: 600;
`
const Workrow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 60px;
  @media (max-width: 450px) {
    margin: 0 24px 120px 24px;
    grid-template-columns: repeat(1, auto);
    grid-gap: 10px;
  }
`
const ProjectInstance = styled.div`
  width: 585px;
  height: 445px;

  border-radius: 4px;
  box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.1), 0 0 2px 0 rgba(0, 0, 0, 0.1);

  :hover {
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.15), 0 0 2px 0 rgba(0, 0, 0, 0.15);
  }
  @media (max-width: 450px) {
    img {
      width: 320px;
      height: 240px;
    }
  }
`
const ProjectContent = styled.div`
  padding: 0px 24px 24px 24px;
`
const ProjectCover = styled.div`
  background-color: #124e5d;
  img {
    width: 585px;
    height: 216px;
  }
  @media (max-width: 450px) {
    img {
      width: 320px;
      height: 240px;
    }
  }
`
const ProjectTitle = styled(H2)`
  padding: 0;
`
const RolesTitle = styled(H2)``
const Projecttag = styled.button`
  padding: 4px 8px;
  margin: 0;
  border-color: #b8b8b8;
  border-width: 0.15em;
  border-style: solid;
  border-radius: 12px;
  background: #fefefe;
  font-size: 12px;
  font-weight: 400;
`
