import './AddUser.css';
import userProfile from '../../../../Assets/Images/userProfile2.png';

const AddUser = () => {
    return (
        <div className='addUser'>
            <form action="">
                <input type="text" placeholder='Username' name='username'/>
                <button>Search</button>
            </form>
            <div className="user">
                <div className="detail">
                    <img src={userProfile} alt="" />
                    <span>Anushree Tiwari</span>
                </div>
                <button>Add User</button>
            </div>
        </div>
    )
}
export default AddUser;