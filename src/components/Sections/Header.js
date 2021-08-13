import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Menu } from "../TextStyles/textStyle"

function Header(props) {
  const [menuOpen, toggleMenuOpen] = useState(false)
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
      <MenuIconContainer>
        <MenuIcon menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)}>
          <div />
          <div />
          <div />
        </MenuIcon>
      </MenuIconContainer>
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
  @media (max-width: 32em) {
    display: none;
    grid-template-columns: repeat(1, auto);
    justify-items: flex-start;
    width: 24em;
    display: ${({ menuOpen }) => (menuOpen ? "grid" : "none")};
    margin: 5em 0 20em 5em;
    a {
      font-size: 1.5em;
      font-weight: 800;
    }
  }
`
const MenuLink = styled(Menu)`
  text-decoration: none;
  color: #131315;
`
const MenuIconContainer = styled.div`
  visibility: hidden;
  @media (max-width: 32em) {
    visibility: visible;
    position: absolute;
    top: 1.8em;
    right: 1.8em;
  }
`
const MenuIcon = styled.div`
  cursor: pointer;
  background: transparent;
  border: none;
  display: grid;
  height: 2em;
  outline: thin-dotted;
  z-index: 200;
  div {
    width: 2em;
    height: 0.25em;
    background: #2c2c2c;
    border-radius: 0.5em;
    transform-origin: 0.05em;
    :first-child {
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(45deg)" : "rotate(0)"};
    }
    :nth-child(2) {
      opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`
