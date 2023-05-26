import React from 'react';
import styles from '../styles/login.module.css'

const Login = () => {
    return (
        <div>
            <form className={styles.container}>
                <div className={styles.flex}>
                    <input type='text' name='id' placeholder='아이디를 입력해주세요.'></input>
                    <select>
                        <option value="naver.com">naver.com</option>
                    </select>
                </div>
                <input type='password' name='password' placeholder='비밀번호를 입력하세요.'></input>
                <select type="chekbox">
                    <p>아이디/비밀번호 기억하기</p>
                </select>

                <button type='button'>로그인</button>
                <button type='button'>회원가입</button>

                <p>아이디/비밀번호 기억이 나지 않아요.</p>
            </form>
        </div>
    );
}

export default Login;