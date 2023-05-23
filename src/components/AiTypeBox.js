import React from 'react';
import { ScrollContainer } from 'react-indiana-drag-scroll';
import styles from '../styles/aitypebox.module.css'

const AiTypeBox = () => {

    return (
        <div className={styles.container}>
            <ScrollContainer className={styles.scrollContainer}>
                <div className={styles.scrollContent}>
                    <div>
                        <div className={styles.item}></div>
                        <p>item1</p> 
                    </div>
                    <div>
                        <div className={styles.item}></div>
                        <p>item2</p> 
                    </div>
                    <div>
                        <div className={styles.item}></div>
                        <p>item3</p> 
                    </div>
                    <div>
                        <div className={styles.item}></div>
                        <p>item4</p> 
                    </div>
                    <div>
                        <div className={styles.item}></div>
                        <p>item5</p> 
                    </div>
                </div>
            </ScrollContainer>
        </div>
    );
}

export default AiTypeBox;
