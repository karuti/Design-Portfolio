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

function Work() {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <Introsection>
        <Contentwrapper>
          <Title1>Thats my work!</Title1>
          <SmallDescription>
            I have a passion for creating products that add value to the
            user.This is a collection of design and code projects that i have
            worked on.Its a mixture of work projects, freelance,
            contest,practise and side projects
          </SmallDescription>
        </Contentwrapper>
      </Introsection>
      <TTWrapper>
        <Title>Projects</Title>
        <Workrow>
          <ProjectInstance>
            <ProjectCover>
              {" "}
              <img
                style={{ width: "640px", height: "450px" }}
                src="images/Fp-mockup.png"
                alt=""
              />
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
              <img
                style={{ width: "640px", height: "450px" }}
                src="images/beautybar2.png"
                alt=""
              />
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

export default Work
const TTWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`
const Introsection = styled.div`
  max-width: 1280px;
  margin: 160px auto;
`
const Contentwrapper = styled.div`
  max-width: 840px;
`
const Title = styled(HeadingLongTxt)`
  margin-bottom: 40px;
`
const SmallDescription = styled(P)``
const Title1 = styled(HeadingIntroBig)`
  padding: 20px 0px 20px 0px;
`
const Workrow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 60px;
`
const ProjectInstance = styled.div``
const ProjectCover = styled.div``
const ProjectTitle = styled(H2)``
