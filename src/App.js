import logo from './logo.svg';
import './App.css';
import './firebase-chat-app.css';
import List from './Components/List'
import Detail from './Components/Detail';
import Chat from './Components/Chat';

function App() {
  return (
    <div className='firebase-chat-app'>
      <List />
      <Chat />
      <Detail />
    </div>
  );
}

export default App;
