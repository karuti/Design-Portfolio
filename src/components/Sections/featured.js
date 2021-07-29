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
`
const Description = styled.div`
  max-width: 640px;
  margin: 280px 0 0 0;
`
const WorkImage = styled.div``
const CompanyName = styled(Extradetail)``
const ProjectTitle = styled(H2)``
const Descirption = styled(P)``
const ProjectLink = styled(P)`
  color: #21c7f7;
`
