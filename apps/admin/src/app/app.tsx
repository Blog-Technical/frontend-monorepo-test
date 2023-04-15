import React from 'react';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import MDEditor from '@uiw/react-md-editor';
import '@uiw/react-md-editor/dist/mdeditor.min.css';

function App() {
  const convertHtmlToArray = (htmlString: string) => {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    const HTMLArray = Array.from(doc.body.children).map((el) => {
      return { html: el.outerHTML, tag: el.tagName.toLowerCase() };
    });
    console.log(HTMLArray);
  };
  const onChange = (data: any) => {
    console.log({ data });
    setValue(data);
    convertHtmlToArray(data);
  };
  const mkdStr = `
  # Markdown Editor
  
  ---
  
  **Hello world!!!**
  
  [![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)](https://avatars.githubusercontent.com/u/1680273?v=4)
  
  \`\`\`javascript
  import React from "react";
  import ReactDOM from "react-dom";
  import MEDitor from '@uiw/react-md-editor';
  
  \`\`\`
  `;

  const [value, setValue] = React.useState(mkdStr);

  return (
    <div className="App">
      <h2>Using CKEditor 5 build in React</h2>
      <MDEditor value={value} onChange={onChange} height={700} />
    </div>
  );
}

export default App;
