import { useEffect, useState } from "react"
import styles from './title.module.css'

export default function App() {
   const [tarefas, setaTarefas] = useState([])

  useEffect(() => {
    async function buscarDados() {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(res => setaTarefas(res))
    }
    buscarDados()
  }, [])
  
  return(
    <div>
      <h1 className={styles.title}>Deploy na vercel</h1>
      <div>
        {tarefas.map((tarefa)=>{
          return(
            <div className="task_item" key={tarefa.id}>
              <p>{tarefa.id} - {tarefa.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}