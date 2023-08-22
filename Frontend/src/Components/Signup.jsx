import { useEffect } from "react"
import '../Components/Login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Signup = () => {

  const [Name, setName] = useState("")
  const [Surname, setSurname] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")


  const disableBorderReact = () => {

    const f1 = document.getElementById('f11')
    const f2 = document.getElementById('f12')
    const f3 = document.getElementById('f13')
    const f4 = document.getElementById('f14')

    f1.style.boxShadow = "none";
    f2.style.boxShadow = "none";
    f3.style.boxShadow = "none";
    f4.style.boxShadow = "none";
    f1.style.background = "none";
    f2.style.background = "none";
    f3.style.background = "none";
    f4.style.background = "none";

  }


  useEffect(() => {
    disableBorderReact();
  }, [])

  const HandleUserRequest = async (e) => {
    e.preventDefault();
    console.log(Name, Surname, Email, Password);

    try{
      axios.post("http://localhost:4135/registerUser", { UserName: Name + Surname, UserPassword: Password, UserEmail: Email },{ withCredentials: true}).then((res) => {
        console.log(res.data);
      }).catch((err) => {
        console.log("Error is Occured" + err);
      })
    }catch(err){
      console.log(`Error is occcured`)
    }
   

  }


  return (
    <>

      <div id="faltu2" style={{ display: "block", margin: "auto", border: "1px solid black", width: "300px", marginTop: "70px" }}>

        <h3>Signup</h3>

        <br />

        <form >

          <label htmlFor="fname" id="f11">First Name</label>
          <input type="text" id="name" required value={Name} onChange={(e) => {
            setName(e.target.value)
          }} />

          <label htmlFor="lname" id="f12">Last Name</label>
          <input type="text" id="name" value={Surname} onChange={(e) => {
            setSurname(e.target.value)
          }} required />

          <label htmlFor="email" id='f13' >Email</label>
          <input type="email" id="email" value={Email} onChange={(e) => {
            setEmail(e.target.value)
          }} required />

          <label htmlFor="Adress" id='f14'>Password</label>
          <input type="password" id="major" value={Password} onChange={(e) => {
            setPassword(e.target.value)
          }} required />


          <div style={{ display: "block", margin: "auto", width: "fit-content", textAlign: "center", textDecoration: "none" }}>

            <button onClick={HandleUserRequest}>Register</button>

            <Link to="/login" style={{ textDecoration: "none", color: "black", listStyle: "none" }}><h4>Login</h4></Link>

          </div>

        </form>
      </div>

    </>
  )
}

export default Signup