import React from 'react';
import MainBanner from '../components/MainBanner';
import styles from '../styles/main.module.css'
import AiTypeBanner from '../components/AiTypeBanner';
import AiActionBanner from '../components/AiActionBanner';
import AiBoardBanner from '../components/AiBoardBanner';

const Main = () => {
    return (
        <div className={styles.main}>
            <MainBanner/>
            <AiTypeBanner/>
            <AiActionBanner/>
            <AiBoardBanner/>
        </div>
    );
}

export default Main;
