import { useNavigate } from "react-router-dom";


export const LogoutFunction = () => {
const navigate = useNavigate();
  const doLogout = () => {
    
    localStorage.clear();
    navigate("/Login");
  };
  return doLogout();
}

export default LogoutFunction