import React from 'react';
import { ScrollContainer } from 'react-indiana-drag-scroll';
import styles from '../styles/mainbannerbox.module.css'

const AiActionBox = () => {
    return (
        <div className={styles.container}>
            <ScrollContainer className={styles.scrollContainer}>
                <div className={styles.scrollContent}>
                    <div>
                        <div className={styles.itemAction}></div>
                        <p className={styles.itemText}>item1</p> 
                    </div>
                    <div>
                        <div className={styles.itemAction}></div>
                        <p className={styles.itemText}>item2</p> 
                    </div>
                    <div>
                        <div className={styles.itemAction}></div>
                        <p className={styles.itemText}>item3</p> 
                    </div>
                    <div>
                        <div className={styles.itemAction}></div>
                        <p className={styles.itemText}>item4</p> 
                    </div>
                    <div>
                        <div className={styles.itemAction}></div>
                        <p className={styles.itemText}>item5</p> 
                    </div>
                </div>
            </ScrollContainer>
        </div>
    );
}

export default AiActionBox;
