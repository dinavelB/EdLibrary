import { useState } from "react";
import 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../index.css";

export default function CreateAccount() {
  return (
    <section className="container">
      <section className="createacc-form">
        <div className="admin-icon">
          <FontAwesomeIcon icon={faUser} id="user-icon" />
          <p>Admin</p>
        </div>
        <h1>Create Account</h1>
        <label htmlFor="">Username</label>
        <input type="text" placeholder="Enter your username" />
        <label htmlFor="">Email</label>
        <input type="email" placeholder="Enter your email" />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Enter your password" />
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Already have an account? Login
        </a>
        <button>Create</button>
      </section>
    </section>
  );
}
