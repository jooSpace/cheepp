import React from 'react';
import MainBanner from '../components/MainBanner';
import styles from '../styles/main.module.css'
import AiTypeBanner from '../components/AiTypeBanner';

const Main = () => {
    return (
        <div className={styles.main}>
            <MainBanner/>
            <AiTypeBanner/>
        </div>
    );
}

export default Main;
