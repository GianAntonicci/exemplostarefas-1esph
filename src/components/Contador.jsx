// useState = Hooks
import {useState} from 'react'


const Contador = () => {

// Hook - useState - manipula o estado da variável
const [contador, setContador]=useState(0);


  return (
    <>
        <h1>Contagem inicial: {contador} </h1>
        <button onClick={()=>setContador(contador +1)}>Aumentar</button>
    </>
  )
}

export default Contador