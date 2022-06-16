
import { useState } from "react"
import FormInput from "../../components/form/FormInput"
import "./register.scss"
import {Link} from "react-router-dom"

const Register = () => {
  const [values, setValues] = useState({
    fullname: "",
    address: "",
    birthday: "",
    gender: "",
    school: "",
    email: "",
    password: "",
    confirmPassword: "",

  });

  const inputs = [
    {
      id: 1,
      name:"fullname",
      type:"text",
      placeholder:"fullname",
      errorMessage:"",
      label:"fullname"
    },
    {
      id: 2,
      name:"address",
      type:"text",
      placeholder:"address",
      errorMessage:"",
      label:"address"
    },
    {
      id: 3,
      name:"birthday",
      type:"date",
      placeholder:"birthday",
      label:"birthday"
    },
    {
      id: 4,
      name:"school",
      type:"text",
      placeholder:"school or university",
      label:"school or university"
    },
    {
      id: 5,
      name:"username",
      type:"text",
      placeholder:"username",
      label:"username"
    },
    {
      id: 6,
      name:"email",
      type:"email",
      placeholder:"email",
      errorMessage:"It should be a valid email address!",
      label:"email"
    },
    {
      id: 7,
      name:"password",
      type:"password",
      placeholder:"password",
      errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label:"password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 8,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      errorMessage:"Passwords don't match!",
      label:"Confirm Password",
      pattern: values.password,
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
   <div className="register">
       <form onSubmit={handleSubmit}>
         <h1>Register</h1>
         {inputs.map((input) =>(
           <FormInput
            key={input.id} {...input}
            value={values[input.name]}
            onChange={onChange}
            />

         ))}
       
       <button>Submit</button>

       <p>Already have an account?
           <Link to="/login" style={{textDecoration:"none"}}>
              Login
              </Link>
           </p>
           <br />
       
       </form>
   </div>
  );
};

export default Register
