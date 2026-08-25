// useEffect - Atualiza na hora o que foi cadastrado, não precisa dar F5
import {useState, useEffect} from 'react'

const Tarefas = () => {

        // Hook - useState - manipula o estado da variável
        const [tarefas, setTarefas]=useState(()=>{
            const salvarTarefas = localStorage.getItem("item-tarefa");
            return salvarTarefas ? JSON.parse(salvarTarefas) : [];
        });

        const [campo, setCampo]=useStatej("");
        // HOOk - useEffect - Realiza o efeito colateral, nesse exemplo vai mostrar a tarefa adicionada em tempo real
        useEffect(()=>{
            localStorage.setItem("item-tarefa", JSON.stringify(tarefas))
        },[tarefas])

  return (
    <>
    
    </>
  )
}

export default Tarefas