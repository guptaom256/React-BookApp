import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Login(props) {

    const [name, setName] = useState("");//
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    let handleSubmit = async (event) => {
        event.preventDefault();
        let data = await fetch(`http://localhost:8080/TrackerApp/api/v1/tracker/oauth/token?grant_type=password&password=${password}&username=${email}`, {
            method: "POST",
            headers: {
                'Authorization': 'Basic YnJvYW4tY2lhcS1hcHAuY2xpZW50LmU0OGJmY2U5YjA0NzQ1OWE4OGVjYzQyZGFlZGQ1M2UzOjdlZTc1NmJjY2QzYWUwMzFlZjUzZDFhOTM4ZWJmMDdmOTA1Zjg4MTllNzdmNzliZjAyNTc5NDUxNTk0MWVjNzA=',
                'Content-Type': 'application/json'
            },
            body: ''
        });
        let parsedData = await data.json();
        // console.log(data);
        if (data.status === 200) {
            // var token = parsedData.access_token;
            // console.log(token);
            let data = await fetch("http://localhost:8080/TrackerApp/api/v1/tracker/user/login", {
                method: "POST",
                headers: {
                    'Authorization': 'Bearer ' + parsedData.access_token,
                    'Content-Type': 'application/json'
                },
                body: ' '
            });
            parsedData = await data.json();
            if (data.status === 200) {
                props.name(parsedData.firstName);
                props.username(email);
                props.password(password);
                localStorage.setItem('Name', parsedData.firstName);
                localStorage.setItem('Email', email);
                localStorage.setItem('Password', password);
                alert("Login Successfull!")
                navigate("/login/dashboard");
            }
        }
        else {
            alert("Login Failed!");
            setEmail("");
            setPassword("");
        }
    }

    return (
        <div >
            <main className="form-signin w-100 m-auto login-main-content">
                <form onSubmit={handleSubmit}>
                    <img className="mb-4 logo-image" src="https://www.logolynx.com/images/logolynx/0b/0b556ab866b0921ec13b24d16fd1ec23.png" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating">
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="form-control top"
                            id="floatingInput"
                            placeholder="name@example.com" required />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="form-control bottom"
                            id="floatingPassword"
                            placeholder="Password" required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    {/* <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me"/> <a href='#'>T&C</a>
                            </label>
                        </div> */}
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                    <p className="text-center text-muted mt-5 mb-0">Don't have an account? <Link to="/"><u>Register here</u></Link></p>
                    <p className="mt-5 mb-3 text-muted">&copy; copyright 2022</p>
                </form>
            </main>
        </div>
    )
}

export default Login;