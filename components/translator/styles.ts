import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  width: auto;
`

export const Select = styled.button`
  border: none;
  height: 100%;
  width: auto;
  background-color: transparent;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-items: center;

  & > img {
    height: 100%;
    width: auto;
    transition: 0.3s ease;
  }

  &:hover {
    cursor: pointer;
    & > img {
      transform: scale(1.2);
    }
  }

  &:active {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`
