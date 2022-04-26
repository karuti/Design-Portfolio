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

function Support() {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <MainImage>
        <img src="/images/help.png" alt="" />
      </MainImage>
      <Contentwrapper>
        <Link to="https://fieldproapp.com/">
          {" "}
          <Title1> How to make users aware of our help center?</Title1>
        </Link>
        <SmallDescription>
          <RolesTitle>Problem Definition</RolesTitle>
          We have a vast support center with articles on common problems, quick
          fixes and tips for when using our systems. However our users were not
          aware of this resource and instead kept making suport calls and
          tickets for issues that they could easily resolve on their own.
          <br></br>
          <br></br>
          We would be designing this solution for our mobile and web user
          segements.
          <RolesTitle>Setting up the metric</RolesTitle>
          We believe that making our support center easily acessible for mobile
          and web users will achieve increased users traffic to the support
          center and less support tickets.
          <br></br>
          <br></br>
          <RolesTitle>Ideation</RolesTitle>
          After brainstorming we came up with the following ideas:
          <ul>
            <ContentList>
              {" "}
              Since the customer sucess team always communicate with the users
              through emails, one way would be to have a banner at the email
              signature that highlights the help center.
            </ContentList>
            <ContentList>
              {" "}
              The second way would be to add a direct link to the help center in
              both the web and mobile apps.
            </ContentList>
          </ul>
          <br></br>
          <br></br>
          <RolesTitle>Visual Design</RolesTitle>
          The final design would then look like this.To be placed on the email
          signatures.{" "}
        </SmallDescription>
      </Contentwrapper>
      <PortfolioImage>
        <img src="/images/Support center banner.png" alt="" />
      </PortfolioImage>{" "}
      <Contentwrapper>
        <RolesTitle>Impact</RolesTitle>{" "}
        <SmallDescription>
          We saw a tremendous increase in the amount of web traffic to the help
          center and more users started using the help center.
        </SmallDescription>
      </Contentwrapper>
      <TTWrapper>
        <Title>Selected Case studies on this project</Title>
        <Workrow>
          <Link to="/brand-awareness">
            <ProjectInstance>
              <ProjectCover>
                {" "}
                <img src="/images/bg-small.png" alt="" />
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

          <Link to="/determining-product-metrics">
            <ProjectInstance>
              <ProjectCover>
                {" "}
                <img src="/images/bg-small.png" alt="" />
              </ProjectCover>
              <ProjectContent>
                <ProjectTitle>Determining product metrics</ProjectTitle>
                <Projecttag>UX Metrics</Projecttag>
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

export default Support
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
const ContentList = styled.li`
  margin: 0 0 12px 48px;
  padding: 0;
  list-style-type: disc;
`
const PortfolioImage = styled.div`
  margin: 80px auto;
  width: 900px;
  height: auto;
  img {
    width: 900px;
  }
  @media (max-width: 450px) {
    img {
      width: 320px;
      height: 240px;
    }
  }
`
