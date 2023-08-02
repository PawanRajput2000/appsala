import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        let { email, password } = credentials
        let res = await fetch("http://localhost:5000/login", {
            method: "post",
            body: JSON.stringify({
                email, password
            }), headers: {
                "content-Type": "application/json"
            }
        })
        let result = await res.json()

        if (result.status === false) {
            alert(result.data)
        } else {
            navigate("/dashboard")
        }


        // Reset the form fields after submission
        setCredentials({
            email: '',
            password: '',
        });
    };

    return (
        <>
            <h2>Login</h2>
            <div className="container">

                <form onSubmit={handleSubmit}>
                    <div>
                        <label><strong>Email:</strong></label>
                        <input
                            type="email"
                            name="email"
                            value={credentials.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                    <p><Link to={"/"}>  Don't have account ?</Link> <Link to={"/forgetpassword"}>Forget Password</Link></p>
                </form>
            </div>

        </>
    );
};

export default Login;
