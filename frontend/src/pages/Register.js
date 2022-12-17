import React from 'react'

function Register() {
  return (
    <div className="container">
  <form id="form" className="form">
    <h2>Register With Us</h2>
    <div className="form-control">
      <label htmlFor="username">Username</label>
      <input type="text" id="username" placeholder="Enter Username" />
      <small>Error Message</small>
    </div>
    <div className="form-control">
      <label htmlFor="email">Email</label>
      <input type="text" id="email" placeholder="Enter email" />
      <small>Error Message</small>
    </div>
    <div className="form-control">
      <label htmlFor="password">Password</label>
      <input type="password" id="password" placeholder="Enter password" />
      <small>Error Message</small>
    </div>
    <div className="form-control">
      <label htmlFor="password2">Confirm Password</label>
      <input
        type="password"
        id="password2"
        placeholder="Enter password again"
      />
      <small>Error Message</small>
    </div>
    <button>Submit</button>
  </form>
</div>

  )
}

export default Register;
