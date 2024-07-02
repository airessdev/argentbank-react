import './userGreetings.css'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, getUserData } from '../../redux/slice/userSlice';
import UserEditForm from '../userEditForm/userEditForm';

const UserGreetings = () => {
    const dispatch = useDispatch();
    const [editToggle, setEditToggle] = useState(false);
    const token = useSelector(state => state.auth.token);
    const user = useSelector(getUserData);
    const connected = useSelector(state => state.auth.connected);
    
    useEffect(() => {
        if (token) {
            dispatch(fetchUserData(token));
        }
    }, [dispatch, token]);

    const handleClick = (e) => {
        e.preventDefault();
        setEditToggle(!editToggle);
    };

    return (
        <div className='user-greetings'>
            <h1>
                Welcome back
                <br />
                {connected && (
                    <div>{user.firstName} {user.lastName}</div>
                )}
            </h1>
            {editToggle ? (
                <UserEditForm
                    editToggle={editToggle}
                    setEditToggle={setEditToggle}
                />
            ) : (
                <button
                    className="edit-button"
                    onClick={handleClick}
                >
                    Edit Name
                </button>
            )}
        </div>
    );
};

export default UserGreetings;
