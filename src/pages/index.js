import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Header from "../components/Sections/Header.js"
import Intro from "../components/Sections/intro.js"
import Footer from "../components/Sections/Footer.js"
import {
  H1,
  H2,
  H3,
  HeadingintroTxt,
} from "../components/TextStyles/textStyle.js"
import FeaturedWork from "../components/Sections/featured"
import CTA from "../components/Sections/cta"
import { gsap } from "gsap"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <Intro />
      <TTWrapper>
        <Title>Featured Work</Title>
      </TTWrapper>
      <FeaturedPortfolio>
        <div>
          <iframe
            width="800px"
            height="600px"
            loading="lazy"
            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFL1mWOgjo&#x2F;view?embed"
            allowfullscreen="allowfullscreen"
            allow="fullscreen"
          ></iframe>
        </div>
        <Description>
          Here is my detailed portfolio with a case study.
        </Description>
      </FeaturedPortfolio>
      <FeaturedWork
        companyName="Optimetriks"
        projectTitle="FieldPro"
        description="At optimetriks i’m designing a field force automation software
        that helps manufactures /brands to manage their field sales."
        pageurl="/work"
        projectlink="View Work"
        featureImage={<img src="images/Fp-mockup.png" alt="" />}
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
const Title = styled(H1)`
  @media (max-width: 450px) {
    max-width: 350px;
    margin: 0;
    padding: 0 24px 80px 24px;
  }
`
const FeaturedPortfolio = styled.div`
  max-width: 1280px;
  margin: 120px auto;
  display: grid;
  grid-template-columns: 800px auto;
  grid-gap: 80px;
`
const Description = styled(HeadingintroTxt)`
  color: #2c2c2c;
  margin: 240px 000;
  @media (max-width: 450px) {
    max-width: 350px;
    margin: 0;
    padding: 0 24px 80px 24px;
  }
`
