import {useState} from 'react'
import "./loginInput.scss"

const LoginInput = (props) => {
    const [focused, setFocused] = useState(false);
    const {label,errorMessage, onChange, id, ...inputProps} = props;
  
    const handleFocus = (e) => {
      setFocused(true);
    };
    
    return (
     <div className="loginInput">
         <label htmlFor="">{label}</label>
         <input {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          focused={focused.toString()}
          />
         <span>{errorMessage}</span>
     </div>
    );
}

export default LoginInput
