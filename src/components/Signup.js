import React from "react"
import { NavLink } from 'react-router-dom';

function Signup() {
    return (
        <div className="contact">
    <h3>TEST</h3>
      <h2>SIGNUP</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="login">Signup</button>
        <NavLink exact to="/login">Login</NavLink>
      </form>
    </div>
    )
}

export default Signup;