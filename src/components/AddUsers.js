import React, { useState } from 'react'
import { TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Switch } from '@mui/material'
import { useDispatch } from 'react-redux';
import { addUser } from '../features/usersSlice';
import { v4 as uuidv4 } from "uuid";
import { Section } from 'react-materialize';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Users from './Users';

const AddUsers = () => {

    const dispatch = useDispatch();
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [phone, setPhone]=useState('');
    const [program, setProgram]=useState('');
    const [message, setMessage]=useState('');

    function sumbitForm(e) {
        e.preventDefault();

        // const obj = { id: uuidv4(), name : name, email : email, };

        // dispatch(addUser(obj));
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            program: "",
            message: "",
            agree: false
        },
        onSubmit: (values)=>{alert(JSON.stringify(formik.values))},
        //Convert to JSON string and show in alert box.

        validationSchema: Yup.object({
            name: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
            email: Yup.string().required("Required.").email("Invalid email (ABC@gmail.com)"),
            phone: Yup.number().integer().required("Required.").typeError("Invalid phone number"),
            program: Yup.string().required().typeError("Please select a program."),
            message: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
            agree: Yup.boolean().oneOf([true], "The terms and conditions must be accepted.")
        }),
    });

    return (
        <div className="grid grid-flow-row-dense grid-cols-3">
            <div>
    <Section>
        <form className='flex flex-col justify-center items-center p-12 gap-8 w-96 mx-auto border-4 border-pink-300 rounded-lg' onSubmit={sumbitForm}>
                
                <TextField fullWidth          
                    helperText="Please enter your name" 
                    id="standard-basic" 
                    variant="outlined"
                    label="Name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onChangeCapture={(event) => {setName(event.target.value);}}
                />
                {formik.errors.name && (<Typography variant="caption" color="red">{formik.errors.name}</Typography>)}
            
                <TextField fullWidth helperText="Please enter your email" 
                    id="demo-helper-text-misaligned" 
                    label="Email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onChangeCapture={(event) => {setEmail(event.target.value);}}
                />
                {formik.errors.email && (<Typography variant="caption" color="red">{formik.errors.email}</Typography>)}
            
                <TextField fullWidth helperText="Please enter your phone number" 
                    id="demo-helper-text-misaligned" 
                    label="Phone"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onChangeCapture={(event) => {setPhone(event.target.value);}}
                />    
                {formik.errors.phone && (<Typography variant="caption" color="red">{formik.errors.phone}</Typography>)}
                
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-autowidth-label">Program of Study</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="Program of Stydy"
                        name="program"
                        value={formik.values.program}
                        onChange={formik.handleChange}
                        onChangeCapture={(event) => {setProgram(event.target.value);}}
                    >
                        {/* <MenuItem value={""}><em>Please select</em></MenuItem> */}
                        <MenuItem value={"Software Engineering"}>Software Engineering</MenuItem>
                        <MenuItem value={"Information System"}>Information System</MenuItem>
                        <MenuItem value={"Information Assurance"}>Information Assurance</MenuItem>
                        <MenuItem value={"Internet of Things"}>Internet of Things</MenuItem>
                        <MenuItem value={"Artificial Intelligence"}>Artificial Intelligence</MenuItem>
                        <MenuItem value={"Digital Art & Design"}>Digital Art & Design</MenuItem>
                    </Select>                  
                </FormControl>
                {formik.errors.program && (<Typography variant="caption" color="red">{formik.errors.program}</Typography>)}

                <TextField fullWidth helperText="Please enter your message" 
                    id="demo-helper-text-misaligned"
                    rows={4} 
                    label="Message"
                    name="message"
                    multiline
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onChangeCapture={(event) => {setMessage(event.target.value);}}
                />    
                {formik.errors.message && (<Typography variant="caption" color="red">{formik.errors.message}</Typography>)}

                <FormControlLabel control={<Switch />} label="Agree to terms and conditions." name='agree'
                    value={formik.values.agree} onClick={formik.handleChange} 
                    />
                {formik.errors.agree && (<Typography variant="caption" color="red">{formik.errors.agree}</Typography>)}
            
                <Button variant="contained" color="secondary" type='submit' fullWidth
                    onClick={()=> {
                        const obj = { id: uuidv4(), name: name, email: email, phone: phone, program: program, message: message};
                        dispatch(addUser(obj))
                    }}>
                    Send Contact
                </Button>
        </form> 
    </Section>
    </div>
    <div className="col-span-2">
          <Users></Users>
        </div>
    </div>
    )
}

export default AddUsers