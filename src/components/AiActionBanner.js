import React from 'react';
import AiActionBox from './AiActionBox';
import styles from "../styles/mainbanner.module.css"


const AiActionBanner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>앵무새 행동</h1>
                <div className={styles.title_more}>
                    <p>더 알아봐요</p>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1L6.5 6L1.5 11" stroke="#888888" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </div>
                
            </div>
        <AiActionBox/>
        </div>
    );
}

export default AiActionBanner;
