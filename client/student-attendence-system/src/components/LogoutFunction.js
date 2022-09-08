import React from 'react'
import { useNavigate } from "react-router-dom";


export const LogoutFunction = () => {
const navigate = useNavigate();
console.log("hello wrold")
  const doLogout = () => {
    localStorage.clear();
    navigate("/Login");
  };
  return doLogout();
}

export default LogoutFunction