import React, {useState} from 'react';
import styles from '../styles/myprofile.module.css'

const MyProfile = () => {

    const [isIdActive, setIsIdActive] = useState(false);
    const [isNameActive, setIsNameActive] = useState(false);
    const [isPasswordActive, setIsPasswordIdActive] = useState(false);
    const [isRePasswordActive, setIsRePasswordActive] = useState(false);

    const handleInputIdFocus = () => {
        setIsIdActive(true);
    }
    const handleInputIdBlur = () => {
        setIsIdActive(false);
    }
    const handleInputNameFocus = () => {
        setIsNameActive(true);
    }
    const handleInputNameBlur = () => {
        setIsNameActive(false);
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

    return (
        <div className={styles.wrapper}>
            <form className={styles.container}>
                <h1>내 정보 수정하기</h1>
                
                <label className={styles.labelStyle}>이메일</label>
                <div className={isIdActive ? styles.inputBoxActive : styles.inputBox}>
                    <input
                        className={styles.inputId}
                        type='text'
                        name='id'
                        placeholder=''
                        onBlur={handleInputIdBlur} 
                        onFocus={handleInputIdFocus} 
                    />
                    <p className={styles.mailStyle}>@</p>
                    <div>
                        <p className={styles.mail}>naver.com</p>
                    </div>
                </div>
                <p className={styles.noticeStyle}></p>
                <label className={styles.labelStyle}>이름</label>
                <div className={isNameActive ? styles.inputBoxActive : styles.inputBox}>
                    <input
                        className={styles.inputName}
                        onBlur={handleInputNameBlur}
                        onFocus={handleInputNameFocus}
                        type='text'
                        name='name'
                    />
                </div>
                <p className={styles.noticeStyle}>이름은 3개월에 1회 변경 가능합니다.</p>
                <label className={styles.labelStyle}>비밀번호</label>
                <div className={isPasswordActive ? styles.inputBoxActive : styles.inputBox}>
                    <input
                        className={styles.inputPassword}  
                        type='password'
                        name='password'
                        onBlur={handleInputPasswordBlur} 
                        onFocus={handleInputPasswordFocus} 
                    />
                </div>
                <p className={styles.noticeStyle}></p>
                <label className={styles.labelStyle}>비밀번호가 동일하게 입력 됐나 확인해주세요.</label>
                <div className={isRePasswordActive ? styles.inputBoxActive : styles.inputBox}>
                    <input
                        className={styles.inputRePassword}
                        onBlur={handleInputRePasswordBlur}
                        onFocus={handleInputRePasswordFocus}
                        type='password'
                        name='password'
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
                
                <button className={styles.inforUpdateBtn} type='button'>정보 수정 완료</button>
                <p className={styles.removeBtn}>회원 탈퇴</p>
            </form>
        </div>
    );
}

export default MyProfile;
