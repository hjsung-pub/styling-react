import React from 'react';

export default function ScssStyleMode() {
    return (
        <>
            <h1 className="noti-txt">| node-sass 설치필요</h1>
            <div className="s-login-wrap">
                <div className="s-login-inner">
                    <h1 className="s-login-title"><em className="s-point">Scss</em> Style Mode Login</h1>
                    <form className="s-login-form">
                        <input type="text" className="id"></input>
                        <input type="password" className="pw"></input>
                        <button type="button" className="s-btn-txt">로그인</button>
                    </form>
                    <div className="s-left-box">
                        <p className="s-ipt-chk">
                            <input type="checkbox" id="loginCheck02"></input>
                            <label for="loginCheck02">로그인 상태 유지</label>
                        </p>
                    </div>
                    <div className="s-login-btn-box">
                        <button type="button">아이디 찾기</button>
                        <button type="button">비밀번호 찾기</button>
                        <button type="button">회원가입</button>
                    </div>
                </div>
            </div>
        </>
    )
}
