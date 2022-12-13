import styled from "styled-components"

export const Navbar = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-evenly;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  align-items: center;
`
