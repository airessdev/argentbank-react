

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from '../../redux/slice/userSlice';
import './userEditForm.css';

function UserEditForm({ setEditToggle }) {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);
    const user = useSelector(state => state.auth.user);
    

    const [userNames, setUserNames] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
    });

    const handleCancel = () => {
        setEditToggle(false);
    };

    const handleEdit = () => {
        dispatch(updateUserData({ token, userNames }));
        setEditToggle(false);
    };

    return (
        <div className="edit-form-container">
            <h2>Edit user info</h2>
            <div className="edit-wrapper">
                <div className='input-wrapper-user-edit'>
                    <label htmlFor="username">User name:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={userNames.userName}
                        onChange={(e) => setUserNames({ ...userNames, userName: e.target.value })}
                    />
                </div>
                <div className='input-wrapper-user-edit'>
                    <label htmlFor="firstName">First name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={userNames.firstName}
                        disabled
                    />
                </div>
                <div className='input-wrapper-user-edit'>
                    <label htmlFor="lastName">Last name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={userNames.lastName}
                        disabled
                    />
                </div>
            </div>
            <div className="edit-buttons">
                <button
                    className="edit-content-button save-button"
                    onClick={handleEdit}
                >
                    Save
                </button>
                <button
                    className="edit-content-button cancel-button"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}

export default UserEditForm;
