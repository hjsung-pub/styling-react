import React from 'react';
import styled from 'styled-components';

const FormBox = styled.div`
    display:block;
    width: 100%;
`;
const InputStyle = styled.input`
    display: block;
    width: 100%;
    height: 4.5rem;
    padding: 0 2rem;
    background-color: #fff;
    border: 1px solid #dfdfdf;
    border-radius: 0;

    & + &{
        margin-top: 1rem;
    }
`;
const ButtonStyle = styled.button`
    width: ${props => props.size == 'full' ? '100%' : '10rem' };
    height: 6rem;
    margin-top: 1rem;
    border: 0;
    border-radius: 0;
    color: #fff;
    background-color: #e0352c;
    font-size: 2rem;
    font-weight: bold;
`;


export default function LoginForm() {
    return (
        <FormBox>
            <InputStyle type="text"></InputStyle>
            <InputStyle type="password"></InputStyle>
            <ButtonStyle size="full">로그인</ButtonStyle>
        </FormBox>
    )
}
