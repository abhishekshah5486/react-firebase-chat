import './ChatList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import userProfile from '../../../Assets/Images/userProfile2.png';
import AddUser from './AddUser';

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);
    return (
        <div className='chat-list'>
            <div className="search">
                <div className="searchBar">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='faMagnifyingGlass'/>
                    <input type="text" placeholder='Search...'/>
                </div>
            <FontAwesomeIcon icon={addMode ? faMinus : faPlus} className='faPlus' onClick={ () => setAddMode(addMode ? false : true) }/>
            </div>
            <div className="item">
                <img src={userProfile} alt="" />
                <div className="texts">
                    <span>Divyanshu Kulhadiya</span>
                    <p>Hey, How are you doing?</p>
                </div>
            </div>
            <div className="item">
                <img src={userProfile} alt="" />
                <div className="texts">
                    <span>Divyanshu Kulhadiya</span>
                    <p>Hey, How are you doing?</p>
                </div>
            </div>
            <div className="item">
                <img src={userProfile} alt="" />
                <div className="texts">
                    <span>Divyanshu Kulhadiya</span>
                    <p>Hey, How are you doing?</p>
                </div>
            </div>
            <div className="item">
                <img src={userProfile} alt="" />
                <div className="texts">
                    <span>Divyanshu Kulhadiya</span>
                    <p>Hey, How are you doing?</p>
                </div>
            </div>
            <div className="item">
                <img src={userProfile} alt="" />
                <div className="texts">
                    <span>Divyanshu Kulhadiya</span>
                    <p>Hey, How are you doing?</p>
                </div>
            </div>
            <div className="item">
                <img src={userProfile} alt="" />
                <div className="texts">
                    <span>Divyanshu Kulhadiya</span>
                    <p>Hey, How are you doing?</p>
                </div>
            </div>
            <div className="item">
                <img src={userProfile} alt="" />
                <div className="texts">
                    <span>Divyanshu Kulhadiya</span>
                    <p>Hey, How are you doing?</p>
                </div>
            </div>
            <div className="item">
                <img src={userProfile} alt="" />
                <div className="texts">
                    <span>Divyanshu Kulhadiya</span>
                    <p>Hey, How are you doing?</p>
                </div>
            </div>
            <div className="item">
                <img src={userProfile} alt="" />
                <div className="texts">
                    <span>Divyanshu Kulhadiya</span>
                    <p>Hey, How are you doing?</p>
                </div>
            </div>
            <div className="item">
                <img src={userProfile} alt="" />
                <div className="texts">
                    <span>Divyanshu Kulhadiya</span>
                    <p>Hey, How are you doing?</p>
                </div>
            </div>
            <div className="item">
                <img src={userProfile} alt="" />
                <div className="texts">
                    <span>Divyanshu Kulhadiya</span>
                    <p>Hey, How are you doing?</p>
                </div>
            </div>
            {addMode && <AddUser/>}
        </div>
    )
}
export default ChatList;