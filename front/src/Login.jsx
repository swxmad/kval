import { useState } from "react";
import { api } from "./api";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await api.post("/auth/login", { username: u, password: p });
      onLogin(res.data.role);
      navigate("/list"); 
    } catch {
      alert("Ошибка входа");
    }
  };

  return (
    <div>
      <input placeholder="Логин" onChange={e => setU(e.target.value)} />
      <input placeholder="Пароль" onChange={e => setP(e.target.value)} />
      <button onClick={login}>Войти</button>
    </div>
  );
}
