import React, {useState} from 'react';
import styles from '../styles/signup.module.css'

const SignUp = () => {

    const [isIdActive, setIsIdActive] = useState(false);
    const [isPasswordActive, setIsPasswordIdActive] = useState(false);
    const [isRePasswordActive, setIsRePasswordActive] = useState(false);
    const [isNameActive, setIsNameActive] = useState(false);
    const [isNumberActive, setIsNumberActive] = useState(false);

    const handleInputIdFocus = () => {
        setIsIdActive(true);
    }
    const handleInputIdBlur = () => {
        setIsIdActive(false);
    }
    const handleInputPasswordFocus = () => {
        setIsPasswordIdActive(true);
    }
    const handleInputPasswordBlur = () => {
        setIsPasswordIdActive(false);
    }
    const handleInputRePasswordFocus = () => {
        setIsRePasswordActive(true);
    }
    const handleInputRePasswordBlur = () => {
        setIsRePasswordActive(false);
    }
    const handleInputNameFocus = () => {
        setIsNameActive(true);
    }
    const handleInputNameBlur = () => {
        setIsNameActive(false);
    }
    const handleInputNumberFocus = () => {
        setIsNumberActive(true);
    }
    const handleInputNumberBlur = () => {
        setIsNumberActive(false);
    }

    return (
        <div className={styles.wrapper}>
            <form className={styles.container}>
                <h1>칩피 회원가입</h1>
                <label className={styles.labelStyle}>사용중인 이메일 주소를 입력해주세요.</label>
                <div className={isIdActive ? styles.inputBoxActive : styles.inputBox}>
                    <input
                        className={styles.inputId}
                        type='text'
                        name="id"
                        placeholder='아이디를 입력해주세요.'
                        onBlur={handleInputIdBlur} 
                        onFocus={handleInputIdFocus} 
                    />
                    <p className={styles.mailStyle}>@</p>
                    <select
                        onFocus={handleInputIdFocus} 
                        onBlur={handleInputIdBlur}
                    >
                        <option value="naver.com">naver.com</option>
                        <option value="gmail.com">gmail.com</option>
                        <option value="">직접입력</option>
                    </select>
                </div>
                <p className={styles.noticeStyle}>이메일 주소로 로그인을 할거예요.</p>
                <label className={styles.labelStyle}>비밀번호를 입력해주세요.</label>
                <div className={isPasswordActive ? styles.inputBoxActive : styles.inputBox}>
                    <input
                        className={styles.inputPassword} 
                        onBlur={handleInputPasswordBlur} 
                        onFocus={handleInputPasswordFocus} 
                        type='password'
                        name='password'
                        placeholder='비밀번호를 입려해주세요.'
                    />
                </div>
                <p className={styles.noticeStyle}>영어 대문자, 소문자, 숫자, 특수문자 조합으로 전체 6자 이상 입력해주세요. <br/> 예) Cheep2$</p>
                <label className={styles.labelStyle}>비밀번호가 동일하게 입력 됐나 확인해주세요.</label>
                <div className={isRePasswordActive ? styles.inputBoxActive : styles.inputBox}>
                    <input
                        className={styles.inputRePassword}
                        onBlur={handleInputRePasswordBlur}
                        onFocus={handleInputRePasswordFocus}
                        type='password'
                        name='password'
                        placeholder='동일한 비밀번호를 입력해주세요.'
                    />
                </div>
                <p className={styles.noticeStyle}></p>
                <label className={styles.labelStyle}>사용할 이름을 지어주세요.</label>
                <div className={isNameActive ? styles.inputBoxActive : styles.inputBox}>
                    <input
                        className={styles.inputName}
                        onBlur={handleInputNameBlur}
                        onFocus={handleInputNameFocus}
                        type='text'
                        name='name'
                        placeholder='ex) 쿠키엄마'
                    />
                </div>
                <p className={styles.noticeStyle}>이름은 3개월에 1회 변경 가능합니다.</p>
                <label className={styles.labelStyle}>전화번호를 입력해주세요.</label>
                <div className={isNumberActive ? styles.inputBoxActive : styles.inputBox}>
                    <input
                        className={styles.inputNumber}
                        onBlur={handleInputNumberBlur}
                        onFocus={handleInputNumberFocus}
                        type='tel'
                        name='phone'
                        placeholder='ex) 010-0000-0000'
                    />
                </div>
                <p className={styles.noticeStyle}>안녕하세요! 나중에 이메일 주소를 깜빡한 경우, 확인 용도로 쓰여요.</p>

                <label className={styles.labelStyle}>(선택 사항) 정보를 전달 받아보실래요?</label>
                <div className={styles.checkBox}>
                    <input
                        className={styles.inputCheckBox} 
                        type='checkbox'
                        id='inputCheckBox'
                    />
                    <label htmlFor="inputCheckBox">입력해주신 이메일 주소로 마케팅이나 정보를 전달 받아보시겠어요?</label>
                </div>
                
                <button className={styles.signUpBtn} type='button'>회원가입 완료</button>
            </form>
        </div>
    );
}

export default SignUp;
