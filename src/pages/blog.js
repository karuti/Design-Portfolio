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
  HeadingLongTxt,
} from "../components/TextStyles/textStyle"

import CTA from "../components/Sections/cta"

function Blog() {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <Introsection>
        <Contentwrapper>
          <Title1>Latest articles</Title1>
          <SmallDescription>
            This blog is a collection of articles in the topics of design,user
            research ,coding and daily life experiences as a product designer
          </SmallDescription>
        </Contentwrapper>
      </Introsection>
      <TTWrapper>
        <Title>Projects</Title>
        <Workrow>
          <ProjectInstance>
            <ProjectCover>
              {" "}
              <img src="images/Fp-mockup.png" alt="" />
            </ProjectCover>
            <ProjectTitle>FieldPro</ProjectTitle>
          </ProjectInstance>
          <ProjectInstance>
            <ProjectCover>
              {" "}
              <img src="images/shoppersapp.png" alt="" />
            </ProjectCover>
            <ProjectTitle>Shoppers App</ProjectTitle>
          </ProjectInstance>
          <ProjectInstance>
            <ProjectCover>
              {" "}
              <img src="images/beautybar2.png" alt="" />
            </ProjectCover>
            <ProjectTitle>BeautyBar</ProjectTitle>
          </ProjectInstance>
          <ProjectInstance>
            <ProjectCover>
              {" "}
              <img src="images/patientcare.png" alt="" />
            </ProjectCover>
            <ProjectTitle>PatientCare</ProjectTitle>
          </ProjectInstance>
        </Workrow>
      </TTWrapper>

      <CTA ctatext="Like what you see?" buttontext="Get In Touch" />
      <Footer />
    </Layout>
  )
}

export default Blog
const TTWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  @media (max-width: 450px) {
    max-width: 350px;
    margin: 0;
  }
`
const Introsection = styled.div`
  max-width: 1280px;
  margin: 160px auto;
  @media (max-width: 450px) {
    margin: 120px 24px 120px 24px;
  }
`
const Contentwrapper = styled.div`
  max-width: 840px;
`
const Title = styled(HeadingLongTxt)`
  margin-bottom: 40px;
  @media (max-width: 450px) {
    margin: 0 24px 60px 24px;
  }
`
const SmallDescription = styled(P)``
const Title1 = styled(HeadingIntroBig)`
  padding: 20px 0px 20px 0px;
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
const ProjectInstance = styled.div``
const ProjectCover = styled.div`
  img {
    width: 640px;
    height: 480px;
  }
  @media (max-width: 450px) {
    img {
      width: 320px;
      height: 240px;
    }
  }
`
const ProjectTitle = styled(H2)``
