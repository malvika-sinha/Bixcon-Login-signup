import React, { useState } from "react";

function App() {
    const [isLoginActive, setIsLoginActive] = useState(true); // Initially, login form is active

    // Function to toggle between Login and Signup
    const toggleForm = () => {
        setIsLoginActive((prevState) => !prevState);
    };

    return (
        <section className="forms-section">
            <div className="header">
                <div className="forms">
                    {/* Login Form */}
                    <div className={`form-wrapper ${isLoginActive ? "is-active" : ""}`}>
                        {isLoginActive && (
                            <form className="form form-login" id="form_login">
                                <fieldset>
                                    <legend>Please, enter your email and password for login.</legend>
                                    <div className="input-block">
                                        <label htmlFor="login-email" id="login-email">E-mail</label>
                                        <input id="login-email" type="email" required />
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="login-password" id="login-email">Password</label>
                                        <input id="login-password" type="password" required />
                                    </div>
                                    {/* Forgotten Password Link in Login */}
                                    <div className="forgot-password">
                                        <a href="#" id="forgot">Forgot your password?</a>
                                    </div>
                                </fieldset>
                                <button type="submit" id="btn-login">
                                    Login
                                </button>
                                {/* Option to switch to Signup */}
                                <div className="switch-option">
                                    <span className="new-user">New User? </span>
                                    <button
                                        type="button"
                                        className="switch-to-signup"
                                        onClick={toggleForm}
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                    {/* Signup Form */}
                    <div className={`form-wrapper ${!isLoginActive ? "is-active" : ""}`}>
                        {/* <button
                        type="button"
                        className="switcher switcher-signup"
                        id="my_Signup"
                        onClick={() => setIsLoginActive(false)}
                    >
                        Sign Up
                    </button> */}
                        {!isLoginActive && (
                            <form className="form form-signup" id="form_signup">
                                <fieldset>
                                    <legend>Please, enter your details for sign up.</legend>
                                    <div className="input-block">
                                        <label htmlFor="signup-username" id="signup_uep">Username</label>
                                        <input id="s" type="text" required />
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="signup-email" id="signup_uep">E-mail</label>
                                        <input id="signup-e" type="email" required />
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="signup-phone" id="signup_uep">Phone Number</label>
                                        <input id="signup-phone" type="tel" required />
                                        <button type="button" className="btn-otp" id="btn">Send OTP</button>
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="signup-password" id="signup_uep">Password</label>
                                        <input id="signup-password" type="password" required />
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="signup-retype-password" id="signup_uep">Retype Password</label>
                                        <input id="signup-retype-password" type="password" required />
                                    </div>
                                    {/* Forgotten Password Link in Signup */}
                                    <div className="forgot-password">
                                        <a href="#" id="forgot">Forgot your password?</a>
                                    </div>
                                </fieldset>
                                <button type="submit" id="btn-signup">
                                    Sign Up
                                </button>
                                {/* Option to switch to Login */}
                                <div className="switch-option">
                                    <span className="new-user">Already have an account? </span>
                                    <button
                                        type="button"
                                        className="switch-to-login"
                                        onClick={toggleForm}
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>

        </section>
    );
}

export default App;
