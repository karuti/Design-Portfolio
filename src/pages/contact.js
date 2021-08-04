import React, { Component } from "react"
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

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = { value: "" }
    this.state = { submitting: false }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  //handle changes in input fileds
  handleChange(event) {
    this.setState({ value: event.target.value })
  }
  //submit to sheets
  handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.target)

    fetch(
      "https://script.google.com/macros/s/AKfycbyplHt-EJ1gCb9QSj5_SoZ_YF3NN-gT6MDomPvddy0pYR2tHtwz3Ut4Kj2FOP9zehHkiA/exec",
      {
        method: "POST",
        body: data,
      }
    )
    //rest the form
    document.getElementById("leadform").reset()
    //Confirmation message
    this.setState({
      submitting: true,
    })
    //make the message dissapear
    setTimeout(() => {
      this.setState({
        submitting: false,
      })
    }, 6000)
  }
  render() {
    const sucessMessage = (
      <SuceessMessageWrapper>
        <SucessMsg>
          We appreciate you contacting us. We will get back in touch with you
          soon!
        </SucessMsg>
      </SuceessMessageWrapper>
    )
    return (
      <Wrapper style={{ backgroundColor: "#131315" }}>
        <SEO title="Home" />
        <HeaderDark />
        <Contactwrapper>
          <Supporttxt>
            <Title>I would love to hear from you!</Title>
            <Description>
              You can fill the form on the right or email me @
              mskaruti@gmail.com
            </Description>
          </Supporttxt>
          <ContactForm>
            <form id="leadform" method="post" onSubmit={this.handleSubmit}>
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
                <InputBox name="message" type="text" id="" />
              </FormGroup>

              <Button type="submit" onChange={this.handleChange}>
                Send
              </Button>
            </form>
            {this.state.submitting ? sucessMessage : ""}
          </ContactForm>
        </Contactwrapper>
        <Footer />
      </Wrapper>
    )
  }
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
  @media (max-width: 450px) {
    margin-top: 40px;
    grid-template-columns: repeat(1, auto);
    grid-gap: 40px;
  }
`
const Supporttxt = styled.div`
  margin: 160px 0 0 0;
  max-width: 480px;
  @media (max-width: 450px) {
    margin-top: 40px;
    max-width: 320px;
    padding: 24px 24px;
  }
`
const ContactForm = styled.div`
  @media (max-width: 450px) {
    max-width: 320px;
    padding: 24px 24px;
  }
`
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
  color: #131315;
  margin: 0;
  padding: 1em 1em;
  height: 9em;
  width: 18em;
  border-style: solid;
  border-color: #2c2c2c;
  border-width: 0.1em;
  border-radius: 0.2em;
  font-size: 1.2em;
  @media (max-width: 450px) {
    width: 12em;
  }
`
//Sucess message container
export const SuceessMessageWrapper = styled.div`
  max-width: 550px;
  margin: 1.5em 0 0em 0;
  background: #21c7f7;
`
export const SucessMsg = styled(P)`
  color: #fbfffe;
  padding: 2em 1.5em 2em 1.3em;
  border-radius: 0.3em;
  @media (max-width: 450px) {
    max-width: 320px;
    padding: 2em 0.5em 2em 0.5em;
  }
`
