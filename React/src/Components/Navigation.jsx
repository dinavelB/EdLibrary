import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import Dashboard from "./Dashboard";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
