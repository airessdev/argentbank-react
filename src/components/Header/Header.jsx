import "./Header.css";
import logo from "../../assets/argentBankLogo.png"; // Tell webpack this JS file uses this image
import iconSignin from "../../assets/icon-signin.png"; // Tell webpack this JS file uses this image
import iconLogout from "../../assets/icon-logout.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slice/authSlice';
import { emptyUserData } from '../../redux/slice/userSlice';

const Header = () => {
    const dispatch = useDispatch();
    const userName = useSelector(state => state.user.userName);
    const isAuthenticated = useSelector(state => state.auth.connected);

    const handleLogOut = () => {
        dispatch(logout());
        dispatch(emptyUserData());
    };

    return (
        <div className="header">
            <Link className="link" to="/">
                <img className="logo" src={logo} alt="Argent Bank Logo" />
            </Link>
            {!isAuthenticated ? (
                <Link className="link" to="/Login">
                    <div className="signin">

                        <img className="signin-icon" src={iconSignin} alt="Sign In" />
                        <p className="signin-text">Sign in</p>
                    </div>
                </Link>
            ) : (
                <div className="user-section">
                    <img className="signin-icon" src={iconSignin} alt="User Icon" />
                    <Link className="link" to="/user">

                        {userName}
                    </Link>
                    <img className="signout-icon" src={iconLogout} alt="Sign out" />
                    <Link
                        className="link"
                        to="/"
                        onClick={handleLogOut}
                    >
                        Sign out
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Header;
