import React, {useState} from 'react';
import styles from '../styles/login.module.css'

const Login = () => {

    const [isIdActive, setIsIdActive] = useState(false);
    const [isPasswordActive, setIsPasswordIdActive] = useState(false);
    const handleInputIdFocus = () => {
        setIsIdActive(true);
    }

    const hadnleInputIdBlur = () => {
        setIsIdActive(false);
    }

    const handleInputPasswordFocus = () => {
        setIsPasswordIdActive(true);
    }

    const hadnleInputPasswordBlur = () => {
        setIsPasswordIdActive(false);
    }

    return (
        <div className={styles.wrapper}>
            <form className={styles.container}>
                <h1>로그인</h1>
                <div className={isIdActive ? styles.inputBoxActive : styles.inputBox}>
                    <input 
                        className={styles.inputId}
                        onBlur={hadnleInputIdBlur} 
                        onFocus={handleInputIdFocus} 
                        type='text' 
                        name='id' 
                        placeholder='아이디를 입력해주세요.'>
                    </input>
                    <p className={styles.mailStyle}>@</p>
                    <select 
                        onFocus={handleInputIdFocus} 
                        onBlur={hadnleInputIdBlur}
                    >
                        <option value="naver.com">naver.com</option>
                        <option value="gmail.com">gmail.com</option>
                    </select>
                </div>
                <div className={isPasswordActive ? styles.inputBoxActive : styles.inputBox}>
                    <input 
                        className={styles.inputPassword} 
                        onBlur={hadnleInputPasswordBlur} 
                        onFocus={handleInputPasswordFocus} 
                        type='password' 
                        name='password' 
                        placeholder='비밀번호를 입력하세요.'>
                    </input>
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