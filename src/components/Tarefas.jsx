// useEffect - Atualiza na hora o que foi cadastrado, não precisa dar F5
import {useState, useEffect} from 'react'
import Contador from '../components/Contador.jsx'
import '../css/style.css'

const Tarefas = () => {

        // Hook - useState - manipula o estado da variável
        const [tarefas, setTarefas]=useState(()=>{
            const salvarTarefas = localStorage.getItem("item-tarefa");
            return salvarTarefas ? JSON.parse(salvarTarefas) : [];
        });

        const [campo, setCampo]=useState("");
        // HOOk - useEffect - Realiza o efeito colateral, nesse exemplo vai mostrar a tarefa adicionada em tempo real
        useEffect(()=>{
            localStorage.setItem("item-tarefa", JSON.stringify(tarefas))
        },[tarefas])

        // Função Adicionar Tarefa
        const AdicionarTarefa = (e)=> {
          //preventDefault - Previne load sozinho da página
          e.preventDefault();
          // trim() = remove espaços em branco (igual strip() do python)
          // Validação de campo se o campo estiver vazio
          if(!campo.trim()) return;

          // novo objeto - tudo aquilo que se pode dar características ou propriedades
          const novaTarefa = {
            // Date.now = Define um id automaticamente
            id:  Date.now(),
            texto: campo,
          }
          // ... = Spred - Adiciona tarefas e mantem as antigas
          setTarefas([...tarefas,novaTarefa]);
          // Limpa a tela
          setCampo('');
        }

        // Função remover tarefa
        const RemoverTareda = (id) => {
          // Verifica se o ID da tarefa atual é diferente do ID que deja apagar
          // Se o ID for igual (tarefa desesja apagar) a condição retorna falso
          // E o item é excluido
          const apagarTarefa = tarefas.filter((tarefa) => tarefa.id != id);
          setTarefas(apagarTarefa);
        }

  return (
    <>
      <div className='todo-container'>
        <h1>Minha lista de tarefas</h1>
        <form onSubmit={AdicionarTarefa}>
          <input
            type='text'
            value={campo}
            onChange={(e)=> setCampo(e.target.value)}
            placeholder='Digite sua Tarefa'
            className='todo-input'
          />
          <button type='submit'>Adicionar</button>
        </form>
      </div>

      <ul>
        {tarefas.map((tarefa)=>(
          <li key={tarefa.id}>
            <span>{tarefa.texto}</span>
            <button onClick={() => RemoverTareda(tarefa.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      {/* Compara se nao tiver tarefas deixa a mensagem nenhuma tarefa salva */}
      {tarefas.length === 0 && <p>Nenhuma Tarefa Salva</p>}
      <Contador/>
    </>
  )
}

export default Tarefas