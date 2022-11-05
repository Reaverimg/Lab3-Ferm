import { Button, TextField ,Typography, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Switch} from '@mui/material'
import React from 'react'
import {useFormik } from 'formik';
import * as Yup from 'yup';
import "yup-phone";
import { Section } from 'react-materialize';

const Contact = () => {
  const formik = useFormik({
    initialValues:{
        name:"",
        email:"",
        phone:"",
        program:0,
        message:"",
        agree:false
    },
    onSubmit:(values) => {
      alert(JSON.stringify(formik.values))
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      phone: Yup.number().integer().typeError("Please enter a valid number").required('Required'),
      program: Yup.number().integer().typeError("Please select a program.").required('Required'),
      message: Yup.string().required("Required.").min(10, "Must be 10 characters or more").required('Required'),
      agree: Yup.boolean().oneOf([true], "The terms and conditions must be accepted.").required('Required')
    })
  })
  return (
    <Section>
    <form className='flex flex-col items-center p-12 w-1/2 gap-8 mx-auto border-4 border-violet-500 border-double rounded-lg' onSubmit={formik.handleSubmit}>
      <TextField
            fullWidth helperText="Please enter your name" id="demo-helper-text-misaligned"
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
      />
      {formik.errors.name && (<Typography variant="caption" color="red">{formik.errors.name}</Typography>)}
      <TextField
        fullWidth helperText="Please enter your email" id="demo-helper-text-misaligned"
        label='Email'
        name='email'
        value={formik.values.email}
        onChange={formik.handleChange}
      >
      </TextField>
      {formik.errors.email && (<Typography variant="caption" color="red">{formik.errors.email}</Typography>)}
      <TextField
        fullWidth helperText="Please enter your phone number" id="demo-helper-text-misaligned"
        label='Phone'
        name='phone'
        value={formik.values.phone}
        onChange={formik.handleChange}
      >
      </TextField>
      {formik.errors.phone && (<Typography variant="caption" color="red">{formik.errors.phone}</Typography>)}
      <FormControl fullWidth sx={{ m: 1, minWidth: 600 }}>
      <InputLabel>Program of Study</InputLabel>
      <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          label="Program of Study"
          name="program"
          value={formik.values.program}
           onChange={formik.handleChange}
      >
          <MenuItem value={0}><em>Please select</em></MenuItem>
          <MenuItem value={1}>Software Engineering</MenuItem>
          <MenuItem value={2}>Information System</MenuItem>
          <MenuItem value={3}>Information Assurance</MenuItem>
          <MenuItem value={4}>Internet of Things</MenuItem>
          <MenuItem value={5}>Artificial Intelligence</MenuItem>
          <MenuItem value={6}>Digital Art & Design</MenuItem>
      </Select>
      {formik.errors.program && (<Typography variant="caption" color="red">{formik.errors.program}</Typography>)}
      </FormControl>
      <TextField
          fullWidth helperText="Please enter your message" 
          id="demo-helper-text-misaligned"
          label="Message"
          multiline
          name='message'
          rows={3}
          value={formik.values.message}
          onChange={formik.handleChange}
      />
      <FormControlLabel control={<Switch/>} label="Agree to terms and conditions." name='agree' 
	      value={formik.values.agree} onClick={formik.handleChange}  
      />
      {formik.errors.agree && (<Typography variant="caption" color="red">{formik.errors.agree}</Typography>)}     
      <Button fullWidth variant="contained" color="secondary" type='submit'>add contact</Button>
    </form>
    </Section>
  )
}

export default Contact