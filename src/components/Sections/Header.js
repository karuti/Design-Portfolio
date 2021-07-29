import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { H2, H4, HeadingintroTxt, Menu } from "../TextStyles/textStyle"

function Header(props) {
  return (
    <Headerwrapper>
      <Logo>
        <img src="/images/Logo.png" style={{ width: "160px" }} alt="" />
      </Logo>
      <MenuItems>
        <Link to="/">
          <MenuLink>Home</MenuLink>
        </Link>
        <Link to="/about">
          <MenuLink>About</MenuLink>
        </Link>
        <Link to="/work">
          <MenuLink>Work</MenuLink>
        </Link>
        <Link to="/blog">
          <MenuLink>Blog</MenuLink>
        </Link>
        <Link to="/contact">
          <MenuLink>Contact</MenuLink>
        </Link>
      </MenuItems>
    </Headerwrapper>
  )
}
export default Header

const Headerwrapper = styled.div`
  max-width: 1280px;

  display: grid;
  grid-template-columns: repeat(2, auto);
  margin: 0 auto;
`
const Logo = styled.div`
  padding: 4px 0 4px 0;
`
const MenuItems = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  padding: 56px 0 24px 0;
`
const MenuLink = styled(Menu)`
  text-decoration: none;
  color: #131315;
`
