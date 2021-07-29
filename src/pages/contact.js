import React from "react"
import styled from "styled-components"

import SEO from "../components/layout/seo"

import HeaderDark from "../components/Sections/HeaderDark.js"
import Footer from "../components/Sections/Footer.js"
import {
  BigHeading,
  P,
  Button,
  Input,
  Label,
} from "../components/TextStyles/textStyle.js"

function Contact(props) {
  return (
    <Wrapper style={{ backgroundColor: "#131315" }}>
      <SEO title="Home" />
      <HeaderDark />
      <Contactwrapper>
        <Supporttxt>
          <Title>I would love to hear from you!</Title>
          <Description>
            You can fill the form on the right or email me @ mskaruti@gmail.com
          </Description>
        </Supporttxt>
        <ContactForm>
          <form id="leadform" method="post" onSubmit>
            <FormTitle>Get In Touch</FormTitle>
            <FormGroup>
              <Label>First Name</Label>
              <Input type="text" name="FullName" id="name" required />
            </FormGroup>
            <FormGroup>
              <Label>Email Address</Label>
              <Input type="email" name="Email" id="email" required />
            </FormGroup>

            <FormGroup>
              <Label>Message</Label>
              <InputBox name="company-name" type="text" id="" />
            </FormGroup>

            <Button type="submit">Send</Button>
          </form>
        </ContactForm>
      </Contactwrapper>
      <Footer />
    </Wrapper>
  )
}
export default Contact
const Wrapper = styled.div``
const Contactwrapper = styled.div`
  max-width: 1280px;
  background-color: #131315;
  margin: 160px auto 240px auto;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 160px;
`
const Supporttxt = styled.div`
  margin: 160px 0 0 0;
  max-width: 480px;
`
const ContactForm = styled.div``
const FormGroup = styled.div`
  padding-top: 20px;
  display: grid;
  gap: 4px;
`

const Title = styled(BigHeading)`
  color: #fbfffe;
`
const Description = styled(P)`
  color: #fbfffe;
  padding: 20px 000;
`
const FormTitle = styled(P)`
  color: #fbfffe;
`
const InputBox = styled.textarea`
  color: #fbfffe;
  margin: 0;
  padding: 0 1em;
  height: 9em;
  width: 18em;
  border-style: solid;
  border-color: #2c2c2c;
  border-width: 0.1em;
  border-radius: 0.2em;
  font-size: 1.2em;
`
