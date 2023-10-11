import React, { useContext, useState } from 'react'

// Импорт сам React Ace
import AceEditor from 'react-ace';

// Импортириуем данные из React Ace
// import brace from 'brace'
import 'brace/mode/html'
import 'brace/theme/mono_industrial'
import 'brace/snippets/html'
import 'brace/worker/html'

import { EditorContext } from '../../context/context';

export const HtmlEditor = () => {

    const { html, setHtml } = useContext(EditorContext)

    return (
        <div>
            <AceEditor
                placeholder='Write your HTML code here!'
                mode="html"

                width='100%'
                theme="monokai"
                name="editor_html"
                value={html}
                onChange={(value) => { setHtml(value) }}
                fontSize={18}
                showPrintMargin={false}
                showGutter={false}
                highlightActiveLine={true}
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    tabSize: 2,
                    enableSnippets: true,
                    cursorStyle: 'smooth',
                }}
            />

        </div>
    )
}
