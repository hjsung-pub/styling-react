import React from 'react';
import styled from 'styled-components';

const LoginBtnBox = styled.div`
    margin-top: 3rem;
    padding-top: 2.5rem ;
    border-top:1px solid #dfdfdf;
    
    button{
        position: relative;
        margin:0 1rem;
        border: 0;
        background-color: unset;
        color: #888;

        & + button::before{
            content: '';
            position: absolute;
            top:50%;
            left: -1rem;
            width: 1px;
            height: 1.4rem;
            margin-top: -.7rem;
            background-color: #dfdfdf;
        }
    }
`;

export default function LoginBtn() {
    return (
        <LoginBtnBox>
            <button type="button">아이디 찾기</button>
            <button type="button">비밀번호 찾기</button>
            <button type="button">회원가입</button>
        </LoginBtnBox>
    )
}
