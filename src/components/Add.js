import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Switch, } from '@mui/material'
import { Section,   } from 'react-materialize';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { useFormik } from 'formik';
export default function FetchAPI() {
    
    const baseURL = "https://636369c537f2167d6f78b4a2.mockapi.io/ListOfUser";
    
    const formik = useFormik({
        initialValues:{
          name:"",
          img:"",
          title:"",
          cost:0,
          // clip:"",
          // description:"",
          // img:"",
          top:false
      },

      onSubmit: (values)=>{
        fetch(baseURL, {  method: 'POST',
        body: JSON.stringify(values),  headers: {
        'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
        }).then(response =>{
          if(!response.ok){
              throw new Error(`HTTP Status: ${response.status}`)
          }
          return response.json()
        })            
        .then(data => setOpen(true))
        .catch(error => console.log(error.message));
      },
      validationSchema: Yup.object({
          name: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
          nation: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
          club: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
          program: Yup.number().integer().typeError("Please type a number."),
          description: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
          clip: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
          img: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
      }),
      });

      const [open, setOpen] = useState(false);
        const handleClose = () => {
        setOpen(false);
      };

    return (
        <Section>
        <form className='flex flex-col justify-center items-center p-12 gap-8 w-2/3 mx-auto border-4 border-pink-300 rounded-lg' onSubmit={formik.handleSubmit}>
        <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.name}
              onChange={formik.handleChange}
           />     
          {formik.errors.name && (<Typography variant="caption" color="red">{formik.errors.name}</Typography>)}
              <TextField
                margin="dense"
                name="img"
                label="URL of image"
                type="text"
                fullWidth
                variant="standard"
                value={formik.values.img}
                  onChange={formik.handleChange}
              />
              {formik.errors.img && (<Typography variant="caption" color="red">{formik.errors.img}</Typography>)}
              <TextField
                margin="dense"
                name="cost"
                label="Cost fee"
                type="text"
                fullWidth
                variant="standard"
                value={formik.values.cost}
                  onChange={formik.handleChange}
              />
              {formik.errors.cost && (<Typography variant="caption" color="red">{formik.errors.cost}</Typography>)}
              <TextField
                margin="dense"
                name="clip"
                label="Intro video"
                type="text"
                fullWidth
                variant="standard"
                value={formik.values.clip}
                  onChange={formik.handleChange}
              />
              {formik.errors.clip && (<Typography variant="caption" color="red">{formik.errors.clip}</Typography>)}
              <TextField
                multiline
                rows={2}
                margin="dense"
                name="description"
                label="Film Title"
                type="text"
                fullWidth
                variant="standard"
                value={formik.values.description}
                  onChange={formik.handleChange}
              />
              {formik.errors.description && (<Typography variant="caption" color="red" display="block">{formik.errors.description}</Typography>)}
              <FormControlLabel control={<Switch/>}
              label="Hot Film" name='agree' 
                />
                <br />
              <Button variant="contained" size="small"  type='submit'>Add</Button>
            </form>
          <Section>
              <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">
                  {"Congraturation"}
                </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <Alert severity="success">
                    <AlertTitle>Adding successful!</AlertTitle>
                  </Alert>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button><Link to='/dashboard' style={{textDecoration:"none"}}>Dashboard</Link></Button>
                <Button autoFocus onClick={handleClose}>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </Section>
        </Section>         
    );
}