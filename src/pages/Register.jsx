import { Button, Card, Container, LinearProgress, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUSer } from "../Features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const Navigate = useNavigate()

  const {isSuccess , isError , isLoading , message, user} = useSelector(state=> state.auth)

  const [ Formdata , setFormdata]= useState({
    name :"",
    email:"",
    password:"",
    confirmPassword:"",
  }) 

  const {name , email, password, confirmPassword} = Formdata
  
  const dispatch = useDispatch()

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(Formdata.password !== Formdata.confirmPassword){
      alert("passwords do not mmatch")
      return
    }
    dispatch(registerUSer(Formdata))
  }

  useEffect(()=>{
    if(isSuccess && user){
      Navigate("/")
    }
  },[isSuccess])
  

  const handleChange = (e)=>{
    setFormdata({...Formdata ,
       [e.target.name] : e.target.value})
  }
  return (
    <Container sx={{ padding: "80px 0px" }}>
      <Card sx={{ padding: "20px" }}>
        <Typography variant="h5" sx={{ margin: "20px" }} textAlign={"center"}>
          Register Here
        </Typography>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <TextField
            color="success"
            variant="outlined"
            label="Enter Name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            fullWidth
            sx={{ margin: "5px 0px" }}
          ></TextField>
          <TextField
            color="success"
            variant="outlined"
            label="Enter Email"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            fullWidth
            sx={{ margin: "5px 0px" }}
          ></TextField>
          <TextField
            color="success"
            variant="outlined"
            label="Enter Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            fullWidth
            sx={{ margin: "5px 0px" }}
          ></TextField>
          <TextField
            color="success"
            variant="outlined"
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            fullWidth
            sx={{ margin: "5px 0px" }}
          ></TextField>

          {isError && (
            <Typography color="error" textAlign="center" sx={{ mt: 2 }}>
              { " An Error Occurred"}
            </Typography>
          )}

          {isLoading && <LinearProgress/>}
          <Button
            sx={{ margin: "10px 0px" }}
            variant="contained"
            color="success"
            fullWidth
            type="submit"
          >
            Register
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default Register;
