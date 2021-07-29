import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { H2, H3, Menu, P } from "../TextStyles/textStyle"

function Footer(props) {
  return (
    <Footerwrapper>
      <FooterContentWrapper>
        <Menugroup>
          {" "}
          <Logo>
            <img
              src="/images/Black bg  Logo.png"
              style={{ width: "160px" }}
              alt=""
            />
          </Logo>
        </Menugroup>

        <Menugroup>
          <Title>Quick Links</Title>
          <Link to="/">
            <MenuLink>Home</MenuLink>
          </Link>

          <Link to="/">
            <MenuLink>About</MenuLink>
          </Link>
          <Link to="/">
            <MenuLink>Work</MenuLink>
          </Link>
          <Link to="/">
            <MenuLink>Blog</MenuLink>
          </Link>
          <Link to="/">
            <MenuLink>Contact</MenuLink>
          </Link>
        </Menugroup>

        <Menugroup>
          <Title>Get in Touch</Title>
          <Text>mskaruti@gmail.com</Text>
        </Menugroup>
        <Menugroup>
          <Title>Socials</Title>
          <Link to="/">
            <MenuLink>LinkedIn</MenuLink>
          </Link>

          <Link to="/">
            <MenuLink>Instagram</MenuLink>
          </Link>
          <Link to="/">
            <MenuLink>Twitter</MenuLink>
          </Link>
        </Menugroup>
      </FooterContentWrapper>
    </Footerwrapper>
  )
}
export default Footer

const Footerwrapper = styled.div`
  width: 100%;
  background-color: #131315;
`
const FooterContentWrapper = styled.div`
  max-width: 1280px;

  display: grid;
  grid-template-columns: repeat(4, auto);
  margin: 0 auto;
  padding: 48px;
`

const Logo = styled.div`
  padding: 4px 0 4px 0;
`
const Menugroup = styled.div``

const MenuLink = styled(Menu)`
  text-decoration: none;
  color: #fbfffe;
`
const Title = styled(H3)`
  text-decoration: none;
  color: #fbfffe;
`
const Text = styled(P)`
  text-decoration: none;
  color: #fbfffe;
`
