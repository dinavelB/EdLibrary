import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Books from "./Dashboard/Books";

export default function Navigation() {
  return (
    <BrowserRouter basename="/admin">
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="books" element={<Books />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
