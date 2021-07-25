import React from 'react';

export default function CssStyleMode() {
    const inlineStyle = {
        color : 'red',
        fontSize: 'inherit'
    }
    return (
        <div className="login-wrap">
            <div className="login-inner">
                <h1 className="login-title"><em style={inlineStyle}>Css</em> Style Mode Login</h1>
                <form className="login-form">
                    <input type="text" className="id"></input>
                    <input type="password" className="pw"></input>
                    <button type="button" className="btn-txt">로그인</button>
                </form>
                <div className="left-box">
                    <p className="ipt-chk">
                        <input type="checkbox" id="loginCheck01"></input>
                        <label for="loginCheck01">로그인 상태 유지</label>
                    </p>
                </div>
                <div className="login-btn-box">
                    <button type="button">아이디 찾기</button>
                    <button type="button">비밀번호 찾기</button>
                    <button type="button">회원가입</button>
                </div>
            </div>
        </div>
    )
}
