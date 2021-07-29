import React from "react"
import styled from "styled-components"

import { HeadingIntroBig, HeadingintroTxt } from "../TextStyles/textStyle"

function Intro(props) {
  return (
    <Introwrapper>
      <SmallDescription>Hello, i am Karuti Joy</SmallDescription>
      <Title1>UX - UI DESIGNER</Title1>
      <And>&</And>
      <Title2>UI DEVELOPER</Title2>
    </Introwrapper>
  )
}
export default Intro

const Introwrapper = styled.div`
  max-width: 1280px;
  margin: 160px auto;
`
const SmallDescription = styled(HeadingintroTxt)``
const Title1 = styled(HeadingIntroBig)`
  padding: 20px 0px 20px 0px;
`
const Title2 = styled(HeadingIntroBig)`
  padding: 20px 0px 20px 0px;
  margin: 0 0px 0 520px;
`
const And = styled(HeadingIntroBig)`
  margin: 0 0px 0 420px;
`
