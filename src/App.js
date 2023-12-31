import React from "react";
// Toast
import { ToastContainer } from "react-toastify";

import { EditorProvider } from "./context/context";
import CodeBar from "./components/CodeBar/CodeBar";
import styles from './App.module.css'
import Header from "./components/Header/Header";
import Preview from "./components/Preview/Preview";
function App() {

  return (
    <EditorProvider>
      <div className={styles.main}>
        <CodeBar />
        <div className={styles.main_row}>
          <Header />
          <Preview />
        </div>
      </div>
      <ToastContainer
        limit={1}
      />
    </EditorProvider>
  );
}
export default App;
