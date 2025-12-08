import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={"https://tse4.mm.bing.net/th/id/OIP.vFuecPRIgrAx_nWCyPZoKgHaE6?pid=Api&P=0&h=220"} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mindcoders</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          get started
        </button>
        <p>
          my first react app
        </p>
      </div>
      <p className="read-the-docs">
       my web StrictMode
      </p>
    </>
  )
}

export default App
