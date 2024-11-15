import { AppBar, Badge, Button, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../Features/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const logout = () => {
    dispatch(logoutUser())
    // navigate("/login")
  }


  const { cartItems } = useSelector((state) => state.cart);

  return (
    <AppBar color="success">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }} variant="h5">
          <Link to={"/"}>CryptoBazar</Link>
        </Typography>

        {user ? (
          <>
           <Button
              size="small"
              sx={{ margin: "0px 5px" }}
              variant="contained"
              color="error"
              onClick={logout}
            >
              Logout
            </Button>
            <Badge badgeContent={cartItems.length} color="error">
              <Button
                size="small"
                sx={{ margin: "0px 5px" }}
                variant="contained"
                color="secondary"
                endIcon={<ShoppingCartIcon />}
              >
                <Link to={"/cart"}>Cart</Link>
              </Button>
            </Badge>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <Button
                size="small"
                sx={{ margin: "0px 5px" }}
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </Link>
            <Link to={"/register"}>
              <Button
                size="small"
                sx={{ margin: "0px 5px" }}
                variant="contained"
                color="primary"
              >
                Register
              </Button>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
