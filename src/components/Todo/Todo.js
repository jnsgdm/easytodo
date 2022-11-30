import {useState} from 'react'

import '../Todo/Todo.css'

import { AiOutlineCheckCircle } from "react-icons/ai";

const Todo = () => {
  const [valueTask, setValueTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleTaskAdd = (e) => {
    e.preventDefault();
    const newTask = {
      id: taskList.length + 1,
      value: valueTask,
      haveDone: false
    }
    setTaskList([...taskList, newTask]);
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
          <AiOutlineCheckCircle style={{ color: 'azure', fontSize: '2em' }}/>
        </button>
      </form>
      {taskList.map((task,index) => (
        <li key={task.id} onClick={() => handleTaskDone(task)} className={task.haveDone ? 'done' : 'not-done'}>
          {index+1}. {task.value}
        </li>
      ))}
    </>
  )
}

export default Todo