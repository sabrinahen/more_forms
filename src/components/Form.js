import React, { useState } from 'react';


const Form = (props) => {

    const {firstName, setFirstName, lastName, setLastName, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword} = props;

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);

        if(e.target.value.length < 1){
            setFirstNameError("First Name Required");
        }
        else if(e.target.value.length < 3){
            setFirstNameError("First name must be at least 3 characters long")
        }
        else{
            setFirstNameError("")
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);

        if(e.target.value.length < 1){
            setLastNameError("Last Name Required");
        }
        else if(e.target.value.length < 3){
            setLastNameError("Last name must be at least 3 characters long")
        }
        else{
            setLastNameError("")
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);

        if(e.target.value.length < 1){
            setEmailError("Email Required");
        }
        else if(e.target.value.length < 3){
            setEmailError("Email must be at least 3 characters long")
        }
        else{
            setEmailError("")
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);

        if(e.target.value.length < 1){
            setPasswordError("Password Required");
        }
        else if(e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters long")
        }
        else{
            setPasswordError("")
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);

        if(e.target.value !== password){
            setConfirmPasswordError("Passwords must match");
        }
        else{
            setConfirmPasswordError("")
        }
    }

    return (
        <div>
            <form>
                <div>
                    <label>First Name: </label>
                    <input onChange={(e)=>{
                        console.log(e)
                        handleFirstName(e)
                    }} type="text" />
                    {
                        firstNameError?
                        <p>{firstNameError}</p>
                        :null
                    }
                    {/* {
                        firstName.length > 0 && firstName.length <2?
                        <p>First name must be at least 2 character long</p>
                        :null
                    } */}
                </div>

                <div>
                    <label>Last Name: </label>
                    <input onChange={(e)=>handleLastName(e)} type="text" />
                    {
                        lastNameError?
                        <p>{lastNameError}</p>
                        :null
                    }
                </div>

                <div>
                    <label>Email: </label>
                    <input onChange={(e)=>handleEmail(e)} type="email" />
                    {
                        emailError?
                        <p>{emailError}</p>
                        :null
                    }
                </div>

                <div>
                    <label>Password: </label>
                    <input onChange={(e)=>handlePassword(e)} type="password" />
                    {
                        passwordError?
                        <p>{passwordError}</p>
                        :null
                    }
                </div>

                <div>
                    <label>Confirm Password: </label>
                    <input onChange={(e)=>handleConfirmPassword(e)} type="password" />
                    {
                        confirmPasswordError?
                        <p>{confirmPasswordError}</p>
                        :null
                    }
                </div>
            </form>
        </div>
    )
    }

export default Form;