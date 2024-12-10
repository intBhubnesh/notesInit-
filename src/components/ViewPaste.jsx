import React, {useEffect, useState} from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { markdown } from '@codemirror/lang-markdown';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { cpp } from '@codemirror/lang-cpp';
import { EditorView } from '@codemirror/view';
import { syntaxHighlighting } from '@codemirror/language';
import { oneDarkHighlightStyle } from '@codemirror/theme-one-dark';


export const ViewPaste = () => {
    const [mode, setMode] = useState('plain'); // Default to plain text
    const pasteId = useParams('id')
    const paste = useSelector(state => state.Paste.pasteList.find(paste => paste.id === pasteId.id))

    useEffect(()=> {
        const detectMode = detectModeFromText(paste.description)
        setMode(detectMode)
    }, [pasteId])
      // Function to detect language mode from the first line
  const detectModeFromText = (inputText) => {
    const firstLine = inputText.split('\n')[0].trim(); // Get the first line
    if (firstLine === '.cpp') return 'cpp';
    if (firstLine === '.js') return 'code';
    if (firstLine === '.py') return 'python';
    if (firstLine === '.md') return 'markdown';
    return 'plain'; // Default to plain text
  };

      // Determine the language extension for CodeMirror
  const getEditorLanguage = () => {
      if (mode === 'markdown') return markdown();
      if (mode === 'code') return javascript();
      if (mode === 'python') return python();
    if (mode === 'cpp') return cpp();
    return []; // Plain text or unsupported mode
  };
  // Custom theme for the CodeMirror editor
  const customTheme = EditorView.theme(
    {

      '*': {
        fontFamily: 'Dank mono',
        outline: 'none',
      },
      '&': {
        all: 'unset  !important',
        backgroundColor: 'rgb(0,0,0,0)', // Transparent editor background
        color: 'rgb(225,225,225,70%)', // Ensure text is visible on a transparent background
        outline: 'rgb(0,0,0,0)',
      },
      '.cm-content': {
        padding: '0 10px',
        backgroundColor: 'rgb(0,0,0,0)', // Transparent content background
      },
      '.cm-gutters': {
        backgroundColor: 'rgb(0,0,0,0)', // Transparent gutter background
        color: '#9D9392', // Line number text color
        border: 'none', // Remove gutter border
        fontSize: '16px',
      },
      '.cm-line': {
        height: '32px',
        color: 'rgb(225,225,225,80%)',
        backgroundColor: 'rgb(0,0,0,0)', // Transparent line background
      },
      '.cm-activeLineGutter': {
        backgroundColor: 'rgb(0,0,0,0)',
      },
    },
    { dark: true }
  );
  return (
    <div>
         <div className='flex flex-col items-center justify-center gap-3'>
        <div className='w-full h-12 flex px-4 justify-start items-center text-[16px] text-white/60 rounded-xl bg-black/70 font-medium'>
            <h1>{paste.title}</h1>
        </div>
    <div
    className="w-full px-2 py-6 overflow-y-scroll h-[420px] rounded-xl bg-black/60"
    style={{
        boxShadow : '0px 3px 18.1px 0px rgba(0, 0, 0, 0.30) inset',
    }}
    >
      <CodeMirror
        value={paste.description}
        extensions={[getEditorLanguage(), customTheme,  syntaxHighlighting(oneDarkHighlightStyle)]}
        placeholder="Paste your content here and keep the extension in the first line"
        readOnly={true}
        style={{pointerEvents:'none', cursor:'none'}}
      />
    </div>
    </div>
    </div>
  )
}