import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Registration() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [tncaccept, setTncaccept] = useState(false);
    // const [userType, setUserType] = useState("");

    let handleSubmit = async (event) => {

        event.preventDefault();

        var body = JSON.stringify({
            "firstName": firstName,
            "lastName": lastName,
            "emailId": email,
            "password": password,
            "tncAccepted": true,
            "registrationType": "ADMIN"
        })

        let data = await fetch("http://localhost:8080/TrackerApp/api/v1/tracker/register", {
            method: "POST",
            headers: {
                // 'Authorization': 'Basic YnJvYW4tY2lhcS10YXJhbmdndXB0YS5jbGllbnQuYjJsZndmM3N4djR6NWJodmVwMXltdTNyN3VlN3ljMjg6enh0cGczNGNqaDE1YTRpenVhd3h3NGUzNWNjYzhza2t5OWczNXNxMWV2MmgyaHU5c2I0NDU2NGF0cTl4cXkzbA==',
                'Content-Type': 'application/json'
            },
            body: body
        });

        let parsedData = await data.json();
        console.log(data.status);

        if (data.status === 201) {
            console.log(parsedData);
            // alert("Registration Successfull!");
            toast.success("Registeration Successful!", {
                position: "top-center",
                // hideProgressBar: true,
              });
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
        }
        else {

        }
    }

    return (
        <div>
            <main className="form-signin w-100 m-auto login-main-content">
                <form onSubmit={handleSubmit}>
                    <img className="mb-4 logo-image" src="https://www.logolynx.com/images/logolynx/0b/0b556ab866b0921ec13b24d16fd1ec23.png" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Register Yourself</h1>

                    <div className="form-floating">
                        <input
                            type="text"
                            value={firstName}
                            onChange={(event) => { setFirstName(event.target.value) }}
                            className="form-control top"
                            // id="floatingInput"
                            placeholder="First Name"
                            required />
                        <label htmlFor="floatingInput">First Name</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="text"
                            value={lastName}
                            onChange={(event) => { setLastName(event.target.value) }}
                            className="form-control middle"
                            // id="floatingInput"
                            placeholder="Last Name"
                            required />
                        <label htmlFor="floatingInput">Last Name</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="email"
                            value={email}
                            onChange={(event) => { setEmail(event.target.value) }}
                            className="form-control middle"
                            // id="floatingInput"
                            placeholder="name@example.com"
                            required />
                        <label htmlFor="floatingInput">Email Address</label>
                    </div>
                    <div className="form-floating ">
                        <input
                            type="password"
                            value={password}
                            onChange={(event) => { setPassword(event.target.value) }}
                            className="form-control bottom"
                            // id="floatingPassword"
                            placeholder="Password"
                            required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    {/* <div style={{ textAlign: "left", marginLeft: "10px" }} className="checkbox mb-3">
                        <label>
                            <input
                                type="checkbox"
                                value={tncaccept}
                                onClick={() => { setTncaccept(!tncaccept) }}
                                // value="remember-me"
                                required />
                            <a href='#'>T&C</a>
                        </label>
                    </div> */}
                    {/* <label style={{ marginRight: "5px" }} htmlFor="cars">Choose Registration Type: </label>
                    <select style={{ marginBottom: "20px" }} required value={userType} onChange={(e) => setUserType(e.target.value)}>
                        <option value="none">Choose</option>
                        <option value="USER">USER</option>
                        <option value="ADMIN">ADMIN</option>
                    </select> */}
                    <button href="/login" className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                    <ToastContainer toastStyle={{ backgroundColor: "green" , color: "white"}} />
                    <p className="text-center text-muted mt-5 mb-0">Already have an account? <Link to="/login"><u>Login here</u></Link></p>
                    <p className="mt-5 mb-3 text-muted">&copy; copyright 2022</p>
                </form>
            </main>
        </div>
    )
}

export default Registration;