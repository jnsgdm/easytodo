import {useState,useReducer} from 'react'

import { BiMessageSquareAdd } from 'react-icons/bi'

const List = () => {
  const [valueTask,setValueTask] = useState("");
  const [taskList,setTaskList] = useState([]);

  return (
    <div className='list-container'>
      <form onSubmit={handleSubmitTask}>
        <input className='input-task' type="text" value={valueTask} onChange={(event) => setValueTask(event.target.value)} placeholder='Para adicionar uma tarefa basta digita-la e apertar enter!' />
        <button type='subimt' className='send-btn'><BiMessageSquareAdd className='send-icon'/></button>
      </form>
      <div className='list'>
        <ul>
          {taskList.map((task) => (
            <div key={task.id}>
              <li>
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