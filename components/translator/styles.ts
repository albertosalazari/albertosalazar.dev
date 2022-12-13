import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  width: 56px;
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
    transition: 0.1s ease;
  }

  &:hover {
    cursor: pointer;
  }

  &:active {
    background-color: transparent;
    & > img {
      transform: scale(0.8);
    }
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 10px;
  border-radius: 0 0 15px 15px;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 10px 15px;

  & li {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }

  & button {
    width: 100%;
    background-color: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }

  & img {
    height: 100%;
    width: 100%;
  }
`
