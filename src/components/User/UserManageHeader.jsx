import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const UserManageHeader = () => {

    const [LoggedIn, setLoggedIn] = useState(false);

    const token = sessionStorage.getItem('authToken');
    
    const navigate = useNavigate();
    console.log("token: " + token)
    return (
        <div>
            {token && (
                <li>
                    <Link className="nav-link" to="/user">Account</Link>
                </li>
            )}
            {!token && (
                <li>
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            )}
            {token && (
                <li>
                    <button className="nav-link" onClick={() => {
                        sessionStorage.removeItem('authToken');
                        navigate("/");
                    }}>Logout</button>
                </li>
            )}
        </div>
    );
}

export default UserManageHeader;