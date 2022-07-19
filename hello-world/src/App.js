// import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';

function App() {
  return (
    <div className='App'>
      {/* <Greet name='the world' type='people' />
      <Greet name='Earth' type='earthlings'>
        <button>Another Child</button>
      </Greet>
      <Greet name='React' type='reactors' />
      <Greet name='parent' type='children'>
        <p>This is the result of props.children</p>
      </Greet>
      <Welcome name='the world' type='people' />
      <Welcome name='Earth' type='earthlings' />
      <Welcome name='React' type='reactors' />
      <Hello /> */}

      {/* <Message /> */}
      {/* <Greet name='Earth' type='earthlings' /> */}
      {/* <Welcome name='the world' type='people' /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      <UserGreeting />
    </div>
  );
}

export default App;
