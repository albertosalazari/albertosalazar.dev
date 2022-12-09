import styled from "styled-components"

export const Navbar = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-evenly;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.primary};
  align-items: center;
`
