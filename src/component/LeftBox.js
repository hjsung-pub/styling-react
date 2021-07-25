import React from 'react';
import styled from 'styled-components';

const LoginLeftBox = styled.div`
    padding-top: 1.5rem;
    text-align: left;
`;
const InputCheck = styled.p`
    label{
        display: inline-block;
        margin-left:1rem;
    }
`;

export default function LeftBox() {
    return (
        <LoginLeftBox>
            <InputCheck>
                <input type="checkbox" id="loginCheck03"></input>
                <label for="loginCheck03">로그인 상태 유지</label>
            </InputCheck>
        </LoginLeftBox>
    )
}
