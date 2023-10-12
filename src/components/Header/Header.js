import React from 'react'
import styles from './Header.module.css'
import { AiFillPlayCircle } from 'react-icons/ai'

// Import roast
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Header() {

    const showToast = () => toast.success('🦄 Баракелде!', {
        position: "top-center"
    });

    return (
        <header className={styles.header}>
            <AiFillPlayCircle onClick={e => showToast()} className={styles.runIcon} />
        </header>
    )
}
