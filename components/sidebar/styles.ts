import styled from "styled-components"

export const Navbar = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-evenly;
  padding: 7px;
  background-color: ${(props) => props.theme.colors.primary};
  align-items: center;
`

export const NavbarItem = styled.a`
  position: relative;

  font-size: 15px;
  text-decoration: none;
  transition: 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:after {
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.colors.tertiary};
    height: 1px;
    width: 0;
    left: 0;
    bottom: -2px;
    transition: 0.3s;
    z-index: -1;
  }

  &:hover:after {
    width: 50%;
  }
`

/**
 * 
a:after{
    content: "";
    position: absolute;
    background-color: #ff3c78;
    height: 3px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
}
a:hover{
    color: #ffffff;
}
a:hover:after{
    width: 100%;
}
 */
