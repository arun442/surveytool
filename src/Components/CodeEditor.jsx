import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const CodeEditorWithOutput = () => {
  const code = `
  () => {
    const [counter, setCounter] = React.useState(0);
  
    const incrementCounter = () => {
      setCounter(counter + 1);
    };
  
    return (
      <div>
        <h2>Simple React Component</h2>
        <p>Counter: {counter}</p>
        <button onClick={incrementCounter}>Increment</button>
      </div>
    )
  }
  `

  return (
    <div style={{textalign:"start"}} className='row'>
      <LiveProvider  code={code} className='row'>
        <div>
        <LiveEditor className='font-mono col-6'/>
        <LiveError />
        <LivePreview className='col-6'/>
        </div>
      </LiveProvider>
    </div>
  );
};

export default CodeEditorWithOutput;
// import React, { useState } from 'react';
// import { Controlled as CodeMirror } from 'react-codemirror2';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/mode/javascript/javascript';
// import axios from 'axios';

// function CodeEditor() {
//   const [code, setCode] = useState('// Write your JavaScript code here');
//   const [output, setOutput] = useState('');
// const API=axios.create({
//   baseURL:"https://emkc.org/api/v2/piston"
// });

//   const runCode = async() => {
//     const response=await API.post("/execute",{
//       // "language": "python",
//       // "version": "3.10.0",
//       "language": "javascript",
//       "version": "18.15.0",
//       "files": [
//         {
//           "content": code
//         }
//       ],
//     })
//     console.log(response.data.run.output);
//     setOutput(response.data.run.output)
//     // try {
//     //   const result = eval(code); // Note: Using eval can be dangerous and is not recommended for production
//     //   setOutput(result);
//     // } catch (error) {
//     //   setOutput(error.toString());
//     // }
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '20px' }}>
//       <CodeMirror
//         value={code}
//         options={{
//           mode: 'javascript',
//           theme: 'default',
//           lineNumbers: true
//         }}
//         onBeforeChange={(editor, data, value) => {
//           setCode(value);
//         }}
//       />
//       <button onClick={runCode} style={{ margin: '20px', padding: '10px' }}>Run Code</button>
//       <div style={{ marginTop: '20px', padding: '10px', border: '1px solid black', width: '100%' }}>
//         <h3>Output:</h3>
//         <pre>{output}</pre>
//       </div>
//     </div>
//   );
// }

// export default CodeEditor;
