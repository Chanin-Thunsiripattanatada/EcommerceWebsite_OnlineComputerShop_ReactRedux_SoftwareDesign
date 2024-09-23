import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useAuth } from '../../auth/AuthContext';

const UserManageHeader = () => {

    const { userLogout, token } = useAuth();
    const navigate = useNavigate();
    console.log("token: " + token)
    return (
        <>
            {token && (
                <li className="nav-item align-self-center">
                    <Link className="nav-link" to="/user">
                        <img src={require('../../assets/image/icons8-user-96.png')} width={50} alt="" />
                    </Link>
                </li>
            )}
            {!token && (
                <li className="nav-item align-self-center">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            )}
            {token && (
                <li className="nav-item align-self-center">
                    <button className="nav-link"
                        onClick={() => {
                            userLogout();
                            navigate("/");
                        }}
                    >Logout</button>
                </li>
            )}
        </>
    );
}

export default UserManageHeader;