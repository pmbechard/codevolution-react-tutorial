// import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className='App'>
      <Greet name='the world' type='people' />
      <Greet name='Earth' type='earthlings' />
      <Greet name='React' type='reactors' />
      <Greet name='parent' type='children'>
        <p>This is the result of props.children</p>
      </Greet>
      <Welcome />
      <Hello />
    </div>
  );
}

export default App;
