import React, {useState} from "react";
import useLocalStorage from "use-local-storage"
import "./index.css"
import "./app.css"

function App() {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }

    return (
        <div className="app" data-theme={theme}>
            <div className="login">
                <h1>Login</h1>

                <div className="container">
                    <div className="top">
                        <i class="fab fa-google"> </i>
                        <i class="fab fa-instagram"> </i>
                        <i class="fab fa-apple"> </i>
                        <i class="fab fa-youtube"> </i>
                        <i class="fab fa-linkedin"> </i>
                    </div>
                    <p className="divider">
                        <span> Or</span>
                    </p>
                    <form action="">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Enter your email "/>
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Enter your password "/>
                        <div className="remember">
                            <input type="checkbox" checked="checked"/>
                            <p>Remember me</p>
                        </div>
                        <button>Log In</button>
                    </form>


                    <div className="bottom">
                        <p>Forgot Password ?</p>
                        <a href="/"> Reset Password</a>
                    </div>
                    <p>Create Account</p>
                </div>

                <div className="theme-toggle">
                    <i onClick={switchTheme} class="fas fa-toggle-on"/>

                </div>
            </div>
        </div>
    );
}

export default App;
