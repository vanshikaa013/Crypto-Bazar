import { Button, Card, Container, LinearProgress, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Features/auth/authSlice";

const Login = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = FormData;

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginUser(FormData))
  };

  useEffect(() => {
    if (user && isSuccess) {
      navigate("/");
    }

    if (isError && message) {
      window.alert(message);
    }
  }, [user, message, isError]);

  if(isLoading){
    <LinearProgress/>
  }
  return (
    <Container sx={{ padding: "80px 0px" }}>
      <Card sx={{ padding: "20px" }}>
        <Typography variant="h5" sx={{ margin: "20px" }} textAlign={"center"}>
          Login Here
        </Typography>
        <form onSubmit={(e) => handleSubmit(e)}>
          <TextField
          required
            color="success"
            variant="outlined"
            label="Email"
            fullWidth
            name="email"
            value={email}
            onChange={handleChange}
          ></TextField>
          <TextField
          required
            color="success"
            variant="outlined"
            label="Password"
            name="password"
            value={password}
            type="password"
            fullWidth
            onChange={handleChange}
            sx={{ margin: "20px 0px" }}
          ></TextField>
          <Button type="submit" variant="contained" color="success" fullWidth>
            Login
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
