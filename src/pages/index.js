import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Header from "../components/Sections/Header.js"
import Intro from "../components/Sections/intro.js"
import Footer from "../components/Sections/Footer.js"
import { H2 } from "../components/TextStyles/textStyle"
import FeaturedWork from "../components/Sections/featured"
import CTA from "../components/Sections/cta"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <Intro />
      <TTWrapper>
        <Title>Feautured Work</Title>
      </TTWrapper>
      <FeaturedWork
        companyName="Optimetriks"
        projectTitle="FieldPro"
        description="At optimetriks i’m designing a field force automation software
        that helps manufactures /brands to managr their field sales."
        projectlink="View Work"
        featureImage={
          <img
            src="images/Fp-mockup.png"
            styke={{ width: "560px", height: "600px" }}
            alt=""
          />
        }
      />
      <FeaturedWork
        companyName="MaridiCouture"
        projectTitle="BeautyBar"
        description="An an ecommerce website that sells original makeup and skincare products.The client wanted a minimal millennial website that is responsive."
        projectlink="View Work"
        featureImage={
          <img
            src="images/beautybar2.png"
            styke={{ width: "560px", height: "600px" }}
            alt=""
          />
        }
      />
      <CTA ctatext="Like what you see?" buttontext="Get In Touch" />
      <Footer />
    </Layout>
  )
}

export default IndexPage
const TTWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`
const Title = styled(H2)``
