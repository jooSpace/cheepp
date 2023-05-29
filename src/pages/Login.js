import React from 'react';
import styles from '../styles/login.module.css'

const Login = () => {

    return (
        <div className={styles.wrapper}>
            <form className={styles.container}>
                <h1>로그인</h1>
                <div className={styles.inputBox}>
                    <input className={styles.inputId} type='text' name='id' placeholder='아이디를 입력해주세요.'></input>
                    <p className={styles.mailStyle}>@</p>
                    <select>
                        <option value="naver.com">naver.com</option>
                        <option value="gmail.com">gmail.com</option>
                    </select>
                </div>
                <div className={styles.inputBox}>
                    <input className={styles.inputPassword} type='password' name='password' placeholder='비밀번호를 입력하세요.'></input>
                </div>
                
                <div className={styles.checkBox}>
                    <input className={styles.inputCheckBox} type="checkbox"/>
                    <p className={styles.fontStyle}>아이디/비밀번호 기억하기</p>
                </div>

                <button className={styles.loginBtn} type='button'>로그인</button>
                <button className={styles.signUpBtn} type='button'>회원가입</button>

                <p className={styles.forgotFontStyle}>아이디/비밀번호 기억이 나지 않아요.</p>
            </form>
        </div>
    );
}

export default Login;