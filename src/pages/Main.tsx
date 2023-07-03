import React from 'react'
import styled from 'styled-components'
import theme from '../style/Theme'
import { useNavigate } from 'react-router-dom'

function Main(): JSX.Element {
  const navigate = useNavigate()
  const goView = (): void => {
    navigate('/view')
  }
  const goEdit = (): void => {
    navigate('/edit')
  }
  return (
    <MainContainer>
      <ButtonContainer>
        <GoViewButton onClick={goView}>조회</GoViewButton>
        <GoEditButton onClick={goEdit}>수정</GoEditButton>
      </ButtonContainer>
    </MainContainer>
  )
}

export default Main

const MainContainer = styled.div`
  width: ${theme.componentSize.maxWidth};
  height: 100vh;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 500px;
`

const GoViewButton = styled.button`
  flex: 1;
  height: 200px;
  margin: 0 10px;
  background-color: ${theme.colors.blue};
  border: none;
  border-radius: 5px;
  color: ${theme.colors.white};
  font-size: ${theme.colors.white};

  &:hover {
    cursor: pointer;
  }
`

const GoEditButton = styled.button`
  flex: 1;
  height: 200px;
  margin: 0 10px;
  background-color: ${theme.colors.blue};
  border: none;
  border-radius: 5px;
  color: ${theme.colors.white};
  font-size: ${theme.colors.white};

  &:hover {
    cursor: pointer;
  }
`
