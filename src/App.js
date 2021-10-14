import React, {useState} from 'react';
import marked from 'marked';
import './app.css';

//Marked library
marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();

//Textarea placeholder
const placeholder = `
  # This is a header
  ## This is a subheader
  [This is my Github Profile](https://github.com/mmjamm89)


  //This is a line of code
  \`const myProject = () => {
    "My Project"
    };  
  \`


  \`\`\`
  let numbers = [1, 2, 3, 4, 5, 6];
  let letters = ['a', 'b', 'c']
  \`\`\`
  This is a list
  - item 1
  - item 2
  - item 3

  >A blockquote

  **And my dog wearing sunglasses and a beanie**

  ![freeCodeCamp Logo](https://i.ibb.co/Yj0d2xZ/IMG-20200901-223853.jpg)
  `

//App functionality
function App() {

  const [text, setText] = useState(placeholder)

  return (
    <div className="App">

      <div id="title">
        <h1 className="title">Markdown Previewer</h1>
        <p className="text">By Juan, for freeCodeCamp<i class="fab fa-free-code-camp"></i></p>
      </div>
      
      <div className="textareas-container">
          <textarea 
            id="editor"
            cols="50"
            rows="30"
            value={text}
            onChange={(e) => setText(e.target.value)}>              
          </textarea>
          <Preview markdown={text}/>
      </div>

    </div>
  );
}

function Preview({markdown}){
  return(
    <div id="preview"         
         cols="50"                 
         rows="30"
         dangerouslySetInnerHTML={{__html: marked(markdown, {renderer: renderer})}}>
    </div>
  )
}

export default App;
