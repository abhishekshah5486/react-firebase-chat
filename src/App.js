import logo from './logo.svg';
import './App.css';
import './firebase-chat-app.css';
import List from './Components/List'
import Detail from './Components/Detail';
import Chat from './Components/Chat';
import Login from './Components/Login';

function App() {
  const user = false;

  return (
    <div className={`firebase-chat-app ${user ? 'logged-in' : 'logged-out'}`}>
      {
        user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
        ) : (
        <Login/>
      )}
    </div>
  );
}

export default App;
