import React from "react"
import styled from "styled-components"

import { Extradetail, H2, P } from "../TextStyles/textStyle"

function FeaturedWork(props) {
  const {
    companyName,
    projectTitle,
    description,
    projectlink,
    featureImage,
  } = props

  return (
    <FeaturedWorkwrapper>
      <Description>
        <CompanyName>{companyName || "Company Name "}</CompanyName>
        <ProjectTitle>{projectTitle || "Project Title "}</ProjectTitle>
        <Descirption>{description || "Description "}</Descirption>
        <ProjectLink>{projectlink || "Project Link"}</ProjectLink>
      </Description>
      <WorkImage>{featureImage}</WorkImage>
    </FeaturedWorkwrapper>
  )
}
export default FeaturedWork

const FeaturedWorkwrapper = styled.div`
  max-width: 1280px;
  margin: 0px auto 160px auto;
  display: grid;
  grid-template-columns: 560px 560px;
  grid-gap: 80px;
  @media (max-width: 450px) {
    max-width: 350px;
    margin: 0;
    grid-template-columns: repeat(1, auto);
    grid-gap: 0;
  }
`
const Description = styled.div`
  max-width: 640px;
  margin: 280px 0 0 0;
  @media (max-width: 450px) {
    max-width: 350px;
    margin: 0;
    padding: 0 24px 0 24px;
  }
`
const WorkImage = styled.div`
  @media (max-width: 450px) {
    transform: scale(0.3);
    margin: 0px 0 0 -400px;
  }
`
const CompanyName = styled(Extradetail)``
const ProjectTitle = styled(H2)``
const Descirption = styled(P)``
const ProjectLink = styled(P)`
  color: #21c7f7;
`
