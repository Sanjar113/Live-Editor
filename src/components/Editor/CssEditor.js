import React, { useContext } from 'react'

// Импорт сам React Ace
import AceEditor from 'react-ace'

// Импортириуем зависимости
// import brace from 'brace'
import 'brace/mode/css'
import 'brace/theme/monokai'
import 'brace/snippets/css'

import { EditorContext } from '../../context/context'
export const CssEditor = () => {


    const { css, setCss } = useContext(EditorContext)

    return (
        <div>
            <AceEditor
                placeholder='Write your CSS code here!'
                mode="css"
                value={css}
                onChange={(value) => { setCss(value) }}
                theme="monokai"
                name="editor_css"
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
