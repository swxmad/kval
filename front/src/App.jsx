import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import List from "./List";
import { useState } from "react";

export default function App() {
  const [role, setRole] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Login onLogin={setRole} />} />
      <Route path="/list" element={<List role={role} />} />
    </Routes>
  );
}
