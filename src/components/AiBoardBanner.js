import React from 'react';
import AiBoardBox from './AiBoardBox';
import styles from "../styles/mainbanner.module.css"

const AiBoardBanner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1 className={styles.titleColor}>새로 올라온 이야기</h1>     
            </div>
        <AiBoardBox/>
        </div>
    );
}

export default AiBoardBanner;
