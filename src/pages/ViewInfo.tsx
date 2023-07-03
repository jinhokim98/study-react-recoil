import React from 'react'
import { styled } from 'styled-components'
import theme from '../style/Theme'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userInfoStore } from '../util/userinfo'

function ViewInfo(): JSX.Element {
  const loadUserInfo = useRecoilValue(userInfoStore)

  const navigate = useNavigate()
  const goMain = (): void => {
    navigate('/')
  }
  return (
    <ViewInfoContainer>
      <View>
        <Title>정보 확인</Title>
        <InputRow>
          <Label>이름</Label>
          <ViewMemberInfo>{loadUserInfo.name}</ViewMemberInfo>
        </InputRow>
        <InputRow>
          <Label>소속</Label>
          <ViewMemberInfo>{loadUserInfo.belong}</ViewMemberInfo>
        </InputRow>
        <InputRow>
          <Label>나이</Label>
          <ViewMemberInfo>{loadUserInfo.age}</ViewMemberInfo>
        </InputRow>
        <EditButton onClick={goMain}>메인으로</EditButton>
      </View>
    </ViewInfoContainer>
  )
}

export default ViewInfo

const ViewInfoContainer = styled.div`
  width: ${theme.componentSize.maxWidth};
  height: 100vh;
`

const View = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 768px;
  height: 500px;
  margin: 30px auto;
  border: 1px solid ${theme.colors.white};
`

const Title = styled.h1`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.title};
  margin: 20px 0;
`

const InputRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin: 20px 0;
`

const Label = styled.div`
  margin-right: 20px;
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.label};
`

const ViewMemberInfo = styled.div`
  width: 300px;
  height: 40px;
  padding: 8px 12px;
  background-color: ${theme.colors.white};
  border-radius: 10px;
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.paragraph};
`

const EditButton = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 20px;
  background-color: ${theme.colors.blue};
  border: none;
  border-radius: 5px;
  color: ${theme.colors.white};
  outline: none;

  &:hover {
    cursor: pointer;
  }
`
