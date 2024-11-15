import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useAuthStatus = () => {
  const { user } = useSelector((state) => state.auth);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [check, setCheck] = useState(true);

  useEffect(()=>{
    user ? setIsLoggedIn(true) : setIsLoggedIn(false)
    setCheck(false);
  },[user])
  return{
    isLoggedIn , check
  }

   
};

export default useAuthStatus;
