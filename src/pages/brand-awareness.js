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
  H3,
} from "../components/TextStyles/textStyle"

import CTA from "../components/Sections/cta"

function BrandAwareness() {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />

      <MainImage>
        <img src="/images/brand.jpg" alt="" />
      </MainImage>
      <Contentwrapper>
        <Link to="https://fieldproapp.com/">
          {" "}
          <Title1>Brand and product Awareness</Title1>
        </Link>
        <SmallDescription>
          Brand awareness is how visible or how well known your brand is in the
          market domain for which your services fall under.A strong brand
          presence is important in lead acquisation.FieldPro after rebranding
          from Smala , needed to establish their brand online, the goal being to
          become the number one reference brand in field force automation.
          <br></br>
          <br></br>A strong brand is utilized to overcome the customer's
          apprehension about trying something new, such as SaaS, which is
          perceived as a risky buy.Therefore for customers to be able to feel
          safe and cofindent in purchasing our product we needed to establish
          our portfolio online starting with the design of our marketing
          website.
          <br></br>
          Out target audience for this content would be companies that need to
          manage their fields sales, and since software acquisation decisons are
          made by their managers that narrows our target audience to field sales
          managers for brands that need to manage their field sales.
          <br></br>
          <br></br>
          <RolesTitle>Setting up metrics</RolesTitle>
          So after examining why we need to establish our brand presence online,
          we set a goal to express what it is we were trying to achieve.We
          believe that building a FieldPro marketing website with content
          targeted at field sales managers will achieve the following: <br></br>
          <ul>
            <ContentList>Establish a brand presence online.</ContentList>
            <ContentList>Increase inbound leads acquisation.</ContentList>
            <ContentList>Create product awareness.</ContentList>
          </ul>
          <br></br>
          <br></br>
          <RolesTitle>Ideation</RolesTitle>
          During ideation we came up with the following strategies:
          <ul>
            <ContentList>
              Utilize free trials ,where a customer gets access to the system
              and experiences it on their own.
            </ContentList>
            <ContentList>
              Provide caste studies so that customers have evidence of customers
              who have gained value from using our products.
            </ContentList>
            <ContentList>
              {" "}
              Provide on demand webinars to give the feel and look of our
              product as a bonus we keep the contacts of those who view them and
              add them to our mailing list.
            </ContentList>
            <ContentList>
              Show our product extensively on the website so that the users have
              an idea of how the product looks.
            </ContentList>
            <ContentList>
              Show content that is relevant to the domain Field Force
              automation.
            </ContentList>
            <ContentList>
              Optimize the site for SEO and performance.
            </ContentList>
          </ul>
          We then scheduled a roadmap for the implementation of the strategies
          ,focusing first on creating content, then optimizing for performance
          and SEO, then to be followed by the case studies and the trial and
          lastly the webinars.
          <RolesTitle>Visual Design</RolesTitle>
          After creating a moodboard and deciding on the style we would use for
          the website.I created mockups and then fine tuned them into
          high-fidelity mockups as shown below.
          <LinktositeTitle>
            {" "}
            <Link to="https://fieldproapp.com/">Link to FieldPro Website</Link>
          </LinktositeTitle>
        </SmallDescription>
      </Contentwrapper>
      <ImagesSection>
        <PortfolioImage>
          <img src="/images/Home- Redesign .jpg" alt="" />
        </PortfolioImage>
      </ImagesSection>
      <TTWrapper>
        <Title>Related Case Studies</Title>
        <Workrow>
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
                <img src="/images/bg-dark.jpg" alt="" />
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

export default BrandAwareness
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
const LinktositeTitle = styled(H3)`
  font-weight: 400px;
  color: #21c7f7;
`

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
const ImagesSection = styled.div`
  max-width: 1280px;
  margin: 120px auto;
  overflow: hidden;
`
const PortfolioImage = styled.div`
  width: 1280px;
  height: auto;
  img {
    width: 1280px;
  }
  @media (max-width: 450px) {
    img {
      width: 320px;
      height: 240px;
    }
  }
`
