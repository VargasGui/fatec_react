import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppViewer from './components/AppViewer'

const mudaNumero = (n) => {
return (n+1)
}
let numero = 15
function App() {
 
  return (
    <>
    <h1>Santos Futebol Clube</h1>
    <AppViewer />
    <p>Numero: {numero}</p>
    <button onClick={numero = mudaNumero(numero)}>Botão</button>
    </>
  )
}

export default App
