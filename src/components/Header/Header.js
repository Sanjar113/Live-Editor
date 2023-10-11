import React from 'react'
import styles from './Header.module.css'
import { AiFillPlayCircle } from 'react-icons/ai'
export default function Header() {
    return (
        <header className={styles.header}>
            <AiFillPlayCircle className={styles.runIcon} />
        </header>
    )
}
