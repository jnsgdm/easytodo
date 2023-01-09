import {useState} from 'react'

import '../Todo/Todo.css'

import { AiFillDelete } from "react-icons/ai";

const Todo = () => {
  const [valueTask, setValueTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleTaskAdd = (e) => {
    e.preventDefault();
    if(!valueTask){
      alert("Não existe tarefa vaiza!")
    }else{
      const newTask = {
        id: taskList.length + 1,
        value: valueTask,
        haveDone: false
      }
      setTaskList([...taskList, newTask]);
    }
    setValueTask("")
  }

  const handleTaskDone = (task) => {
    const updatedTaskList = taskList.map((item) => {
      if (item.id === task.id) {
        item.haveDone = !task.haveDone;
      }
      return item;
    });
    setTaskList(updatedTaskList);
  }

  const handleDeleteTask = (task) => {
    const filterTaskList = taskList.filter((item) => {
      return item.id !== task.id;
    });
    setTaskList(filterTaskList);
  }

  return (
    <>
      <form onSubmit={handleTaskAdd} className='form-container'>
        <input
          type="text"
          className='input-task'
          value={valueTask}
          placeholder="Digite a tarefa aqui..."
          onChange={(e) => setValueTask(e.target.value)}
        />
        <button type='submit' className='add-btn'>
          Adicionar 
        </button>
      </form>

      { taskList.length !== 0 && <div className='line'></div> }

      {taskList.map((task, index) => (
          <div className='item-container'>
            <li key={task.id} onClick={() => handleTaskDone(task)} className={task.haveDone ? 'done' : 'not-done'}>
              {index + 1}. {task.value}
            </li>
            <AiFillDelete onClick={() => handleDeleteTask(task)} className='delete-icon' />
          </div>
        ))}
    </>
  )
}

export default Todo