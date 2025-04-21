import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Logout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  logout();
  localStorage.removeItem("user");

  navigate(storedUser && storedUser.role === "admin" ? "/login" : "/");
};

export default Logout;
