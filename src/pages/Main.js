import React from 'react';
import MainBanner from '../components/MainBanner';
import styles from '../styles/main.module.css'
import AiTypeBanner from '../components/AiTypeBanner';
import AiActionBanner from '../components/AiActionBanner';

const Main = () => {
    return (
        <div className={styles.main}>
            <MainBanner/>
            <AiTypeBanner/>
            <AiActionBanner/>
        </div>
    );
}

export default Main;
