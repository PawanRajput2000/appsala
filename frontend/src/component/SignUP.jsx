import React,{useState} from 'react'
import "./SignUP.css"
import { Link,useNavigate } from 'react-router-dom';




function SignUP() {
   let  navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
      });
    
      const handleChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }));
      };
    
    const onsubmit = async (e)=>{
        e.preventDefault()
    
        let {name , email , password} = formData
        let res =  await fetch("http://localhost:5000/signup",{
            method :"post",
            body:JSON.stringify({
                name ,email, password
            }),headers:{
                "content-Type":"application/json"
            }
        })
        let result = await res.json()

        if(result.status === false){
            alert(result.data)
        }else{
            alert(" account created successfully")
            navigate("/login")
        }
    }
    
    return (
        <div>
            <form  onSubmit ={onsubmit} className="signup-form">
                <h2>Sign Up</h2>
                <div className="form-group">
                    <label >Full Name</label>
                    <input type="text"  name="name" value = {formData.name}  onChange={handleChange} placeholder='Enter FullName' required />
                </div>
                <div className="form-group">
                    <label >Email</label>
                    <input type="email" name="email" value = {formData.email} onChange={handleChange} placeholder='Enter Email' required />
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password"  name="password" value = {formData.password} onChange={handleChange}  placeholder="Enter Password" required />
                </div>
                <button type="submit">Sign Up</button>
                <div className="form-options">
                    <p><Link to ={"/login"}>Already have account ?</Link> </p>
                    
                    
                </div>
            </form>

        </div>
    )
}

export default SignUP