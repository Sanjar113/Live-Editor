import React, { useState } from 'react'
import styles from '../CodeBar/CodeBar.module.css'
import { HtmlEditor } from '../Editor/HtmlEditor'
import { CssEditor } from '../Editor/CssEditor'
import { JsEditor } from '../Editor/JsEditor'


export default function CodeBar() {
    const [activeTab, setActiveTab] = useState('html')

    return (
        <div className={styles.codebar}>
            <nav className={styles.tab}>
                <button
                    onClick={() => setActiveTab('html')}
                    className={`${styles.item} ${activeTab === 'html' ? styles.active_tab : ''}`}>
                    HTML
                </button>

                <button
                    onClick={() => setActiveTab('css')}
                    className={`${styles.item} ${activeTab === 'css' ? styles.active_tab : ''}`}>
                    CSS
                </button>

                <button
                    onClick={() => setActiveTab('js')}
                    className={`${styles.item} ${activeTab === 'js' ? styles.active_tab : ''}`}>
                    JS
                </button>
            </nav>

            <div className={styles.editor}>
                {activeTab === 'html' && <HtmlEditor />}
                {activeTab === 'css' && <CssEditor />}
                {activeTab === 'js' && <JsEditor />}
            </div>
        </div>
    )
}
