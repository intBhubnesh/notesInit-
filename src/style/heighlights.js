import { EditorView } from '@codemirror/view';


export const customTheme = EditorView.theme({
 // Custom theme for the CodeMirror editor
      '*': {
        all: 'unset  !important',

        fontFamily: 'Dank mono',
        outline: 'none',
      },
      '&': {
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


  }, { dark: true });




//   '.cm-matchingBracket, .cm-matchingTag': {
//     borderBottom: '2px solid #56b6c2',
//     color: '#abb2bf !important',
//     backgroundColor: 'transparent',
//   },
//   '.cm-nonmatchingBracket': {
//     borderBottom: '2px solid #e06c75',
//     color: '#abb2bf !important',
//     backgroundColor: 'transparent',
//   },
//   '.cm-foldMarker, .cm-foldGutter, .cm-foldGutter-open, .cm-foldGutter-folded': {
//     border: 'none',
//     textShadow: 'none',
//     color: '#5c6370 !important',
//     backgroundColor: 'transparent',
//   },
//   '.cm-activeLine': {
//     backgroundColor: 'rgba(153, 187, 255, 0.04)',
//   },
//   '.cm-header': {
//     color: '#e06c75',
//   },
//   '.cm-quote': {
//     color: '#5c6370',
//     fontStyle: 'italic',
//   },
//   '.cm-negative': {
//     color: '#e06c75',
//   },
//   '.cm-positive': {
//     color: '#e06c75',
//   },
//   '.cm-strong': {
//     color: '#d19a66',
//     fontWeight: 'bold',
//   },
//   '.cm-header.cm-strong': {
//     color: '#d19a66',
//     fontWeight: 'bold',
//   },
//   '.cm-em': {
//     color: '#c678dd',
//     fontStyle: 'italic',
//   },
//   '.cm-header.cm-em': {
//     color: '#c678dd',
//     fontStyle: 'italic',
//   },
//   '.cm-tag': {
//     color: '#e06c75',
//   },
//   '.cm-attribute': {
//     color: '#d19a66',
//   },
//   '.cm-link': {
//     color: '#98c379',
//     borderBottom: 'solid 1px #98c379',
//   },
//   '.cm-builtin': {
//     color: '#e06c75',
//   },
//   '.cm-keyword': {
//     color: '#c678dd',
//   },
//   '.cm-def': {
//     color: '#e5c07b',
//   },
//   '.cm-atom': {
//     color: '#d19a66',
//   },
//   '.cm-number': {
//     color: '#d19a66',
//   },
//   '.cm-property': {
//     color: '#56b6c2',
//   },
//   '.cm-qualifier': {
//     color: '#d19a66',
//   },
//   '.cm-variable': {
//     color: '#e06c75',
//   },
//   '.cm-string': {
//     color: '#98c379',
//   },
//   '.cm-punctuation': {
//     color: '#abb2bf',
//   },
//   '.cm-operator': {
//     color: '#56b6c2',
//   },
//   '.cm-meta': {
//     color: '#abb2bf',
//   },
//   '.cm-bracket': {
//     color: '#abb2bf',
//   },
//   '.cm-comment': {
//     color: '#5c6370',
//     fontStyle: 'italic',
//   },
//   '.cm-error': {
//     color: '#e06c75',
//   },
//   '.cm-m-css.cm-variable': {
//     color: '#828997',
//   },
//   '.cm-m-css.cm-property': {
//     color: '#abb2bf',
//   },
//   '.cm-m-css.cm-atom': {
//     color: '#56b6c2',
//   },
//   '.cm-m-css.cm-builtin': {
//     color: '#56b6c2',
//   },
//   '.cm-m-lua.cm-variable': {
//     color: '#56b6c2',
//   },
