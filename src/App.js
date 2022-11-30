import './App.css';

import Title from './components/Title/Title';
import Todo from './components/Todo/Todo';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <header>
          <Title/>
        </header>
        <Todo />
        <footer>
          <Footer/>
        </footer>
    </div>
  );
}

export default App;