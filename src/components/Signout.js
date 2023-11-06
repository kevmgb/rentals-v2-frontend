import React from "react";
import { useNavigate } from 'react-router-dom';

function Signout() {
    const navigate = useNavigate();
    localStorage.removeItem('token');
    localStorage.removeItem('isLogged');
    navigate('/');
}

export default Signout;