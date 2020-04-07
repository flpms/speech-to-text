import React, { useState } from 'react';

import './App.css';

import { useSpeechSynthesis, useSpeechRecognition } from "react-speech-kit"

function App() {
  const [value, setValue] = useState("");
  const ref = React.useRef()
  
  const { speak } = useSpeechSynthesis()
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: result => setValue(result)
  })

  const askAndListen = () => {
    speak({ text: 'Você está se sentindo bem?' });
    setTimeout(() => listen({ lang: 'pt-BR' }), 2000);
  }

  return (
    <div className="App">

      <button onClick={ askAndListen }>Perguntar</button>

      <div>
        {listening ? "Speak, I'm listening" : ""}
        <textarea 
          value={value}
          onChange={
            event => setValue(event.target.value)
          } />
          <br/>
        <button onClick={stop}>Stop</button>
      </div>
    </div>
  );
}

export default App;
