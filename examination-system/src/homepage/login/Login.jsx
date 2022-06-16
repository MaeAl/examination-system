import {useState} from 'react'
import LoginInput from "../../components/form/LoginInput"
import "./login.scss"
import {Link} from "react-router-dom"

const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
      });
    
      const inputs = [
        {
          id: 1,
          name:"email",
          type:"email",
          placeholder:"email",
          errorMessage:"It should be a valid email address!",
          label:"email"
        },
        {
          id: 2,
          name:"password",
          type:"password",
          placeholder:"password",
        //   errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
          label:"password",
        //   pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
        
      ]
      
    
      const handleSubmit = (e)=>{
        e.preventDefault();
        
      }
    
      const onChange = (e)=>{
        setValues({...values, [e.target.name]: e.target.value});
      };
    
      console.log(values);
      return (
       <div className="login">
           <form onSubmit={handleSubmit}>
             <h1>Login</h1>
             {inputs.map((input) =>(
               <LoginInput
                key={input.id} {...input}
                value={values[input.name]}
                onChange={onChange}
                />
    
             ))}
           
           <button>login</button>

           <p>Don't have an account?
           <Link to="/register" style={{textDecoration:"none"}}>
              Register
              </Link>
           </p>
           <br />
           
           </form>
       </div>
      );
}

export default Login
