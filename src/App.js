import './App.css';

import Title from './components/Title/Title';
import Todo from './components/Todo/Todo';
import Footer from './components/Footer/Footer';

function App() {
  let taskList = null;
  const items = JSON.parse(localStorage.getItem('tasks'));
  if(items == null){
    taskList = []
  }else{
    taskList = items;
  }
  
  return (
    <div className="App">
        <header>
          <Title/>
        </header>
        <Todo taskList={taskList}/>
        <footer>
          <Footer/>
        </footer>
    </div>
  );
}

export default App;