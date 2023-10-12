import React, { useContext } from 'react'
// Импорт сам React Ace
import AceEditor from 'react-ace'

// Импортириуем зависимости
// import brace from 'brace'
import 'brace/mode/css'
import 'brace/theme/monokai'
import 'brace/snippets/css'

import './Editor.css'
import { EditorContext } from '../../context/context'
export const CssEditor = () => {


  const { css, setCss } = useContext(EditorContext)
  const defaultCss = `*{
  padding: 0;
  margin: 0;
}

div{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: background;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  background: #909;
}



h1{
  color:  red;
  cursor: pointer;
  animation-name: example;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes example {
  0%{
    color: white;
  }
  50%{
    color: blue;
  }
} 

@keyframes background {
  0%{
    background: lightblue;
  }
  25%{
    background: violet;
  }
  50%{
    background: orange;
  }
}`


  return (
    <div>
      <AceEditor
        height='calc(100vh - 70px)'
        placeholder='Бул жерге CSS код жазыныз!'
        mode="css"
        value={css}
        width='100%'
        defaultValue={defaultCss}
        scrollMargin={1}
        onChange={(value) => { setCss(value) }}
        theme="tomorrow"
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
