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

  return (
    <div className="App">

      <div>
        <button onClick={() => speak({ text: 'Você está se sentindo bem?' })}>Speak</button>
      </div>

      <div>
        {listening ? "Speak, I'm listening" : ""}
        <textarea 
          value={value}
          onChange={event => setValue(event.target.value)} />
        <button onClick={() => listen({ lang: 'pt-BR' }) }>Listen</button>
        <button onClick={stop}>Stop</button>
      </div>
    </div>
  );
}

export default App;
