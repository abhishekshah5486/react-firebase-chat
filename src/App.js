import './App.css';
import './firebase-chat-app.css';
import List from './Components/List'
import Detail from './Components/Detail';
import Chat from './Components/Chat';
import Login from './Components/Login';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from './lib/firebase';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const auth = getAuth(app);
const firestore = getFirestore(app);
function App() {
  const [user, setUser] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
    const onSubscribe = onAuthStateChanged(auth, async user => {
      if (user){
        // await fetchUserInfo(user);
        setUser(true);
      } else setUser(false);
    })
    return () => onSubscribe();
  }, [])

  const fetchUserInfo = async (user) => {
    const docRef = doc(firestore, 'users', user.uid);
    const docSnap =  await getDoc(docRef);
    setCurrentUser(docSnap.data());
  }
  return (
    <div className={`firebase-chat-app ${user ? 'logged-in' : 'logged-out'}`}>
      {
        user ? (
        <>
          <List currentUser={currentUser}/>
          <Chat currentUser={currentUser}/>
          <Detail signOut={signOut} auth={auth} currentUser={currentUser}/>
        </>
        ) : (
        <Login/>
      )}
    </div>
  );
}

export default App;
