import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";

export default function Navigation() {
  return (
    <BrowserRouter basename="/admin">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
