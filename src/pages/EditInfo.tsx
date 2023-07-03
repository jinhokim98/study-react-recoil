import React, { type FormEvent } from 'react'
import { styled } from 'styled-components'
import theme from '../style/Theme'
import useInput from '../hooks/useInput'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { type UserInfo, userInfoStore } from '../util/userinfo'

function EditInfo(): JSX.Element {
  const [userInfo, setUserInfo] = useRecoilState(userInfoStore)

  const [name, onNameChange] = useInput<string>(userInfo.name)
  const [belong, onBelongChange] = useInput<string>(userInfo.belong)
  const [age, onAgeChange] = useInput<number>(userInfo.age)

  const navigate = useNavigate()

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const userInfo: UserInfo = { name, belong, age }
    setUserInfo(userInfo)
    navigate('/')
  }
  return (
    <EditInfoContainer>
      <FormWrapper>
        <Form onSubmit={onSubmit}>
          <Title>정보 수정</Title>
          <InputRow>
            <Label>이름</Label>
            <InputContent
              type="text"
              value={name}
              onChange={onNameChange}
              placeholder="이름을 입력해주세요"
              required
            />
          </InputRow>
          <InputRow>
            <Label>소속</Label>
            <InputContent
              type="text"
              value={belong}
              onChange={onBelongChange}
              placeholder="소속을 입력해주세요"
              required
            />
          </InputRow>
          <InputRow>
            <Label>나이</Label>
            <InputContent
              type="number"
              value={age}
              onChange={onAgeChange}
              placeholder="나이를 입력해주세요"
              required
            />
          </InputRow>

          <SubmitButton type="submit">제출</SubmitButton>
        </Form>
      </FormWrapper>
    </EditInfoContainer>
  )
}

export default EditInfo

const EditInfoContainer = styled.div`
  width: ${theme.componentSize.maxWidth};
  height: 100vh;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 768px;
  height: 500px;
  margin: 30px auto;
  border: 1px solid ${theme.colors.white};
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const InputContent = styled.input`
  width: 300px;
  height: 40px;
  padding: 8px 12px;
  font-size: ${theme.fontSizes.paragraph};
  outline: none;
`

const SubmitButton = styled.button`
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
