import React, { useContext } from 'react'

// Импорт сам React Ace
import AceEditor from 'react-ace';

// Импортириуем данные из React Ace
// import brace from 'brace'
import 'brace/mode/javascript'
import 'brace/theme/monokai'
import 'brace/snippets/javascript'

import { EditorContext } from '../../context/context';

export const JsEditor = () => {

    const { js, setJs } = useContext(EditorContext)

    return (
        <div>
            <AceEditor
                placeholder='Write your JavaScript code here!'
                mode="javascript"
                theme="monokai"
                value={js}
                onChange={(value) => { setJs(value) }}
                name="editor_js"
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
