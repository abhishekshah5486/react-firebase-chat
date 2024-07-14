import './UserInfo.css';
import userProfile from '../../../Assets/Images/userProfile2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faVideo } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
const UserInfo = () => {
    return (
        <div className='user-info'>
            <div className="user">
                <img src={userProfile} alt="" />
                <h2>Abhishek Shah</h2>
            </div>
            <div className="icons">
                <FontAwesomeIcon icon={faEllipsis} />
                <FontAwesomeIcon icon={faVideo} />
                <FontAwesomeIcon icon={faPenToSquare} />
            </div>
        </div>
    )
}
export default UserInfo;