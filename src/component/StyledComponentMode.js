import React from 'react';
import styled, {css} from 'styled-components';
import LoginForm from './LoginForm';
import LoginBtn from './LoginBtn';
import LeftBox from './LeftBox';

const LoginWrapper = styled.div`
    padding: 3rem 5rem;
    border: 1px solid #ccc;
    text-align: center;
    background-color: #f5f6f7;
`;
const LoginInner = styled.div`
    max-width: 46rem;
    margin: 0 auto;
`;
const Title = styled.h1`
  padding: 2rem 2rem 5rem;
  font-size: 3rem;
  color: #333;
  font-weight: bold;

  .c-point{
      color: orange;
      font-size: inherit;
  }
`;


export default function StyledComponentMode() {
    return (
        <>
            <h1 className="noti-txt">| styled-components 설치필요</h1>
            <LoginWrapper>
                <LoginInner>
                    <Title><em className="c-point">styled-component</em> Mode Login</Title>
                    <LoginForm></LoginForm>
                    <LeftBox></LeftBox>
                    <LoginBtn></LoginBtn>
                </LoginInner>
            </LoginWrapper>
        </>
    )
}
