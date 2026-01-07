import { useEffect, useState } from "react";
import "../../../CSS/Dashboard.css";
import dashboard from "../../../Icons/dashboard-icon.png";
import book from "../../../Icons/book-icon.png";
import users from "../../../Icons/users-icon.png";
import details from "../../../Icons/details-icon.png";
import search from "../../../Icons/search-icon.png";
import Books from "./Books";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function DashboardComp({ options, active, setActive, nav }) {
  const clicked = (path) => {
    setActive(path);
    nav(path);
  };

  return (
    <section className="dashboard-container">
      <div className="dashboard-holder">
        <nav className="navigation-container">
          <span className="logo">
            Ed<span>Library</span>
          </span>
          <ul>
            {options.map((option) => (
              <li
                key={option.path}
                onClick={() => clicked(option.path)}
                className={`nav ${active === option.path ? "active" : ""}`}
              >
                <img src={option.icon} alt="" />
                {option.navigate}
              </li>
            ))}
          </ul>
        </nav>
        <div className="main-board-search">
          <div className="input-holder">
            <img src={search} alt="" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="main-board">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
}
export default function Dashboard() {
  const [active, setActive] = useState(null);
  const token = localStorage.getItem("adminToken"); //take the string only or key
  const nav = useNavigate();

  const sampleVerify = async () => {
    const sendData = await fetch("/dashboard", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const data = await sendData.json();
    console.log(data);
  };

  useEffect(() => {
    sampleVerify();
  }, []);

  const options = [
    { navigate: "Dashboard", icon: dashboard, path: "/dashboard" },
    { navigate: "Books", icon: book, path: "/dashboard/books" },
    { navigate: "Users", icon: users, path: "/dashboard/users" },
    { navigate: "Book Details", icon: details, path: "/dashboard/details" },
  ];

  return (
    <>
      <DashboardComp
        active={active}
        setActive={setActive}
        options={options}
        nav={nav}
      />
    </>
  );
}
