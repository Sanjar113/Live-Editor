import React, { useContext, useState } from 'react'

// Импорт сам React Ace
import AceEditor from 'react-ace';

// Импортириуем данные из React Ace
// import brace from 'brace'
import 'brace/mode/html'
import 'brace/theme/tomorrow'
import 'brace/snippets/html'
import 'brace/worker/html'
import 'react-toastify/dist/ReactToastify.css'
import { EditorContext } from '../../context/context';
export const HtmlEditor = () => {

    const { html, setHtml } = useContext(EditorContext)
    const [defaultValue, setDefaultValue] = useState(`<div>
  <h1>Hello</h1>
</div>`)

    return (
        <div>
            <AceEditor
                placeholder='Бул жерге HTML код жазыныз!'
                mode="html"
                width='100%'
                height='calc(100vh - 70px)'
                theme="tomorrow"
                name="editor_html"
                value={html}
                onChange={(value) => { setHtml(value) }}
                defaultValue={defaultValue}
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
