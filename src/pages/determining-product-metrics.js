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

function ProductMetrics() {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />

      <MainImage>
        <img src="/images/conditional.png" alt="" />
      </MainImage>
      <Contentwrapper>
        <Link to="https://fieldproapp.com/">
          {" "}
          <Title1>Conditional Design</Title1>
        </Link>
        <SmallDescription>
          <RolesTitle>Problem Definition</RolesTitle>
          Our systems rely on a condition building system.We need to be simplify
          this process for our internal users.We are trying to create a simple
          way for operations team when setting up clients to easily use
          conditions to manipulate the display of questions or activities.
          <br></br>
          <br></br> <RolesTitleSmall> Who?</RolesTitleSmall>
          This is mostly used by operations team when setting up their clients
          environments.
          <br></br> <RolesTitleSmall>What ?</RolesTitleSmall> It is a feature
          that allows you to create a condition, manipulate the system to act in
          a certain way based on a given output. <br></br>
          <RolesTitleSmall>Where?</RolesTitleSmall> In workflows section of the
          app<br></br>
          <RolesTitleSmall>Why?</RolesTitleSmall>
          Decide on sequencing of the questions based on set conditions.
          Questions will be shown on the workflow based on the options selected.
          I.e Did you make a sale? Yes/No.If no then you won't be asked to
          mentioned the products sold. If yes you will have to input the
          products.
          <br></br> <RolesTitleSmall>How? </RolesTitleSmall>The system behaves
          according to the conditions given,this feature allows you to create
          those conditions between constant value or system fields.
          <br></br>
          <br></br>
          <RolesTitle>Ideation </RolesTitle>
          This are the important touchpoints we want to keep in mind <br></br>
          <ul>
            <ContentList>
              {" "}
              As a web user i should know which questions are linked
            </ContentList>
            <ContentList>
              As a web user i should be able to pick the variables and
              operations easily
            </ContentList>
            <ContentList>
              As a web user i should be able to nest the operands with ease
            </ContentList>
          </ul>
          <RolesTitle>Visual Design </RolesTitle>
          <img
            src="/images/Single operation answers.jpg"
            alt=""
            style={{ width: "900px" }}
          />
          <br></br>
          <br></br>
          <img
            src="/images/conditions snnipet.png"
            alt=""
            style={{ width: "900px" }}
          />
          <br></br>
          <br></br>
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
        </Workrow>
      </TTWrapper>
      <CTA ctatext="Like what you see?" buttontext="Get In Touch" />
      <Footer />
    </Layout>
  )
}

export default ProductMetrics
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
const RolesTitleSmall = styled(H4)``
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
