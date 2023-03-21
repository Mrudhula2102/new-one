import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Validation = () => {
    var [submitted,setsubmitted] = useState(false);
    var [inputname, setinputname] = useState({
        fname: ""
    })
    var [Validation, setValidation] = useState({
        fname: ""

    })
    const inputHandler = (e) => {
        const { name, value } = e.target
        setinputname({ ...inputname, [name]: value })
    }
    const checkvalidation = () => {
        let errors = Validation;
        //first name validation
        if (!inputname.fname.trim()) {
            errors.fname = "First name is required";
        } else {
            errors.fname="";
        }
        setValidation(errors);
    }
    useEffect(() => {
        checkvalidation();
    });
    var handlesubmit =(e) =>{
        e.preventDefault();
        setsubmitted(true);
    }
    return (
        <div align='center'>
            <form
                id="registrationForm"
                onSubmit={handlesubmit}
             >   
            <TextField label='first name' name='fname' value={inputname.fname} onChange={inputHandler} ></TextField><br></br>
            {(Validation.fname && submitted) && <p>{Validation.fname}</p>}
            <Button variant='contained' color='primary' type='submit' >Save</Button>
            </form>
        </div>
    )
}
export default Validation
