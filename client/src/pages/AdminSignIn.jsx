import React, { useState } from "react";
import "./signIn.css"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router";


export default function AdminSignIn() {
    const navigation = useNavigate()
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setemailError] = useState("");
    const [loginError, setLoginError] = useState("");
    const handleValidation = async () => {
        let formIsValid = true;

        if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            formIsValid = false;
            setemailError("Email Not Valid");
            return false;
        } else {
            setemailError("");
            formIsValid = true;
        }
        try{
            const response = await axios.post("http://localhost:5001",{email,password})
            if (response.data.success) {
                console.log('Login successful');
              } else {
                setLoginError('Invalid username or password');
              }
        }
        catch (e) {
            console.error(e)
        }

        return formIsValid;
    };

    const loginSubmit = (e) => {
        e.preventDefault();
        handleValidation();
    };

    return (
        <div className="container">
            <h2>Admin Sign In</h2>
            <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                    <form id="loginform" onSubmit={loginSubmit}>
                        <div className="form-group">
                            <label>Email address</label>
                            <br />
                            <input
                                type="email"
                                className="form-control"
                                id="EmailInput"
                                name="EmailInput"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <small id="emailHelp" className="text-danger form-text">
                                {emailError}
                            </small>
                        </div>
                        <br />
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <small className="text-danger form-text">
                            {loginError}
                            </small>
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

