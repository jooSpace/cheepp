import React from 'react';
import styles from '../styles/myprofile.module.css'

const MyProfile = () => {
    return (
        <div className={styles.wrapper}>
            <form className={styles.container}>
                <h1>내 정보 수정하기</h1>
                
                <label>이메일</label>
                <div>
                    <input
                        type='text'
                        name='id'
                        placeholder=''
                    />
                    <p className={styles.mailStyles}>@</p>
                    <div>
                        <p>naver.com</p>
                    </div>
                </div>
                <label>이름</label>
                <div>
                    <input
                        type='text'
                        name='name'
                    />
                </div>
                <p>이름은 3개월에 1회 변경 가능합니다.</p>
                <label>비밀번호</label>
                <div>
                    <input 
                        type='password'
                        name='password'
                    />
                </div>
            </form>
        </div>
    );
}

export default MyProfile;
