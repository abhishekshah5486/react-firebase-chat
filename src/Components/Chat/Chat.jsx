import './Chat.css';
import userProfile from '../../Assets/Images/userProfile2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone, faVideo, faCircleInfo, faImage, faCamera, faMicrophone} from '@fortawesome/free-solid-svg-icons';
import {faFaceSmile} from '@fortawesome/free-regular-svg-icons';

const Chat = () => {
    return (
        <div className="chat">
            <div className="top-section">
                <div className='chat-user-info'>
                    <img src={userProfile} alt="" />
                    <div className="texts">
                        <span>Divyanshu Kulhadiya</span>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="icons">
                  <FontAwesomeIcon icon={faPhone} />
                  <FontAwesomeIcon icon={faVideo} />
                  <FontAwesomeIcon icon={faCircleInfo} />
                </div>
            </div>
            <div className="center-section">
               
            </div>
            <div className="bottom-section">
                <div className="btm-section-icons">
                    <FontAwesomeIcon icon={faImage} />
                    <FontAwesomeIcon icon={faCamera} />
                    <FontAwesomeIcon icon={faMicrophone} />
                </div>
                <input type="text" placeholder='Type a message'/>
                <div className="emoji">
                    <FontAwesomeIcon icon={faFaceSmile} />
                </div>
                <button className='sendBtn'>Send</button>
            </div>
        </div>
    )
}
export default Chat;