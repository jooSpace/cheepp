import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import styles from '../styles/header.module.css'

const Header = () => {
    return (
        <div className={styles.header_container}>
            <header className={styles.header}>
                <div className={styles.flex}>
                    <Link to="/">
                        <img src={logo} alt='logo'></img>
                    </Link>
                    <div>
                        <nav className={styles.menu_container}>
                        <Link to="/">앵무새 종류</Link>
                        <Link to="/">앵무새 행동</Link>
                        <Link to="/">응급처치</Link>
                        <Link to="/">진료 병원</Link> 
                        </nav>
                    </div>
                </div>
                <div className={styles.login_form}>
                    <p>회원가입/로그인</p>
                </div>
            </header>
        </div>
    );
}

export default Header;
