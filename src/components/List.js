import {useState} from 'react'

import './List.css';
import { BiMessageSquareAdd } from 'react-icons/bi'

const List = () => {
  const [valueTask,setValueTask] = useState("");
  const [taskList,setTaskList] = useState([]);

  const handleTaskAdd = (event) => {
    event.preventDefault();
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
    <div className='list-container'>
      <form onSubmit={handleTaskAdd}>
        <input className='input-task' type="text" value={valueTask} onChange={(event) => setValueTask(event.target.value)} placeholder='Para adicionar uma tarefa basta digita-la e apertar enter!' />
        <button type='subimt' className='send-btn'><BiMessageSquareAdd className='send-icon'/></button>
      </form>
      <div className='list'>
        <ul>
          {taskList.map((task) => (
            <div key={task.id}>
              <li onClick={() => handleTaskDone(task)} className={task.haveDone ? 'done' : 'not-done'}>
                {task.id}. {task.value}
              </li>
            </div>
          ))}
          {/*  <button><AiFillEdit className='edit-icon'/></button> */}
        </ul>
      </div>
    </div>
  )
}

export default List