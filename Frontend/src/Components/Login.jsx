import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Components/Login.css';

const Login = () => {

    const disableBorder = () => {

        const f3 = document.getElementById('f3')
        const f4 = document.getElementById('f4')
        f3.style.boxShadow = "none";
        f4.style.boxShadow = "none";
        f3.style.background="none";
        f4.style.background="none";

    }


    useEffect(() => {
        disableBorder();
    }, [])


    return (
        <>

            <div id='Faltudiv' style={{ display: "block", margin: "auto", border: "1px solid black", width: "300px", marginTop: "70px" }}>

                <h3>Login</h3>

                <br />

                <form >

                    <label htmlFor="email" id='f3'>Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="major" id='f4'>Password</label>
                    <input type="password" id="major" name="major" required />


                    <div style={{ display: "block", margin: "auto", width: "fit-content", textAlign: "center", textDecoration: "none" }}>

                        <button>Login</button>
                        <Link to="/signup" style={{ textDecoration: "none", color: "black", listStyle: "none" }}><h4>Register</h4></Link>

                    </div>

                </form>
            </div>
        </>
    )
}

export default Login