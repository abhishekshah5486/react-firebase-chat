import './List.css';
import UserInfo from './UserInfo';
import ChatList from './ChatList';


const List = ({currentUser}) => {
    return (
        <div className="list">
            <UserInfo currentUser={currentUser}/>
            <ChatList currentUser={currentUser}/>
        </div>
    )
}
export default List;