import logo from './logo.svg';
import './App.css';
import './firebase-chat-app.css';
import List from './Components/List'
import Detail from './Components/Detail';
import Chat from './Components/Chat';
import Login from './Components/Login';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from './lib/firebase';
import { useEffect, useState } from 'react';

const auth = getAuth(app);
function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user){
        setUser(true);
      } else setUser(false);
    })
  }, [])
  return (
    <div className={`firebase-chat-app ${user ? 'logged-in' : 'logged-out'}`}>
      {
        user ? (
        <>
          <List />
          <Chat />
          <Detail signOut={signOut} auth={auth}/>
        </>
        ) : (
        <Login/>
      )}
    </div>
  );
}

export default App;
