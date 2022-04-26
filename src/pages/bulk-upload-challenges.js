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

function Csv() {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />

      <MainImage>
        <img src="/images/bulk.png" alt="" />
      </MainImage>
      <Contentwrapper>
        <Link to="https://fieldproapp.com/">
          {" "}
          <Title1>
            How to make it easy for users to upload items in bulk using csv?
          </Title1>
        </Link>
        <SmallDescription>
          <RolesTitle>Problem Definition</RolesTitle>
          Four our web app system ,we require users to add their team details as
          mobile users into the system for them to be able to use the mobile
          app.This can be done in two ways.
          <ul>
            <ContentList>
              They can add the user direct through a form on the web app
            </ContentList>
            <ContentList>They can import a Csv file for the users.</ContentList>
          </ul>{" "}
          <br></br>
          <br></br>
          We noticed a challenge in the process where our clients are unable to
          go through the import csv process thus resulting in a high number of
          support tickets for the import users process.
          <br></br>
          <br></br>
          <RolesTitle>Research</RolesTitle>
          To tackle the problem I first decided to try out the process ,taking
          note of each step the user is required to do, it's illustrated in the
          user flow below.I then did an observation with one of the users just
          to try and see how they go about the process and noticed a few hiccups
          in the process.
          <img
            src="/images/Bulk upload userFlow.png"
            alt=""
            style={{ width: "900px" }}
          />
          <br></br>
          <br></br>A challenge that stood out from the observations and
          interviews was that a lot of actions in the process were happening
          outside the web-app. For instance once the user clicks on import
          users, they have to make sure the csv file they are uploading matches
          the fields given on the web-app.This they have to do manually on their
          own with no guidance. So mapping the fields between what the user has
          vs what is required in the web-app becomes the challenging factor for
          users, who then get frustrated and decide to raise a support ticket.
          <br></br>
          <br></br>
          The second challenge was a technical error where if my csv file has an
          error, normally i’d delete and upload a new one.But the errors from
          the previous file do not clear up making it confusing but also
          impossible to add a new upload file.So what users do is they have to
          refresh the whole web-app and start afresh.This leads to overall
          frustrations that results in the whole process being perceived as
          difficult.
          <RolesTitle>Setting Up the metric</RolesTitle>
          After understanding the challenge above we set a goal for what we
          wanted to achieve.We believe that by simplifying the users bulk upload
          process for our web users we will create a more user friendly
          experience ,so that our users will be able to upload their users in
          bulk and thus resulting in less support tickets for the bulk process
          problem.
          <RolesTitle>Ideation</RolesTitle>
          To tackle the problems above, i did benchmark and research on how to
          solve common bulk import challenges. The stragefy we adopted was to
          relieve our users of the burden of having to match their fields on
          their own in another tool like excel, and have the web-app handle the
          process only reuquiring users to do verfications where necessary. We
          would allow our users to compare the fields they have vs what we
          needed in the app without having to leave the app and use an external
          tool.
          <br></br>
          <br></br>
          So to solve our first problem in the upload journey, we would do the
          mapping for the users to take off that load off their backs, and only
          require them to verify. For the second issue of where the error is
          persistent even if I have a new file uploaded, that would be filed as
          a bug for the tech team to address.
          <br></br>
          So the new user flow would have four steps:<br></br>
          <ul>
            <ContentList>
              Upload your csv-We let the users upload their csv file.
            </ContentList>
            <ContentList>
              Match columns So here we try to match the columns automatically,
              but for those that the system is unable to match, we will ask the
              user to manually do it
            </ContentList>
            <ContentList>
              Repair Problems In this step we let the user repair data, these
              are the situations where they have no data in rows whose columns
              are required.
            </ContentList>
            <ContentList>
              Notified of successful completion-we let the user know that the
              process has been successful.
            </ContentList>
          </ul>{" "}
          <RolesTitle>Visual Design</RolesTitle>
          <img
            src="/images/CSV UPLOAD ONE.png"
            alt=""
            style={{ width: "900px" }}
          />
          <br></br>
          <br></br>
          <img
            src="/images/CSV upload 2.png"
            alt=""
            style={{ width: "900px" }}
          />
          <br></br>
          <br></br>
          <img
            src="/images/Csv upload 3.png"
            alt=""
            style={{ width: "900px" }}
          />
        </SmallDescription>
      </Contentwrapper>
      {/* <ImagesSection>
        <PortfolioImage>
          <img src="/images/Home- Redesign .jpg" alt="" />
        </PortfolioImage>
      </ImagesSection> */}
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

export default Csv
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
const ImagesSection = styled.div`
  max-width: 1280px;
  margin: 120px auto;
  overflow: hidden;
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
