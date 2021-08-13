import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { HeadingLongTxt, Button } from "../TextStyles/textStyle"

function CTA(props) {
  const { ctatext, buttontext } = props
  return (
    <CTAwrapper>
      <CtaText>{ctatext || "Like what you see? "}</CtaText>
      <Link to="/contact">
        <Button>{buttontext || "Get in Touch "}</Button>
      </Link>
    </CTAwrapper>
  )
}
export default CTA

const CTAwrapper = styled.div`
  max-width: 1280px;
  margin: 160px auto;
  @media (max-width: 450px) {
    margin: 0 24px 120px 24px;
  }
`
const CtaText = styled(HeadingLongTxt)`
  max-width: 800px;
`
