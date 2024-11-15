import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import { Container, Grid, LinearProgress, Typography } from "@mui/material";
import CoinCard from "../components/CoinCard";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingCoins } from "../Features/Coin/coinSlice";

const Home = () => {
  const { allCoins, isLoading, isError, message } = useSelector(
    (state) => state.coins
  );
  const dispatch = useDispatch()

  // dispatch action for getting coins 
   

  useEffect(()=>{
  dispatch(getTrendingCoins())
  },[])

  if(isLoading){
    return (
      <>
      <HeroSection/>
      <LinearProgress sx={{margin:"20px opx"}}/> 
      </>
    )
  }

  if(isError){
    return (
     <>
     <HeroSection/>
     <Typography variant="h2"  textAlign={'center'} color="error" >something went wrong!!</Typography>
     </>
    )
  }

  return (
    <>
      <HeroSection />
      <Typography variant="h4" textAlign={"center"} sx={{ margin: "20px 0px" }}>
        Top Trending Coins
      </Typography>

      <Container>
        {!allCoins ? (
          <>
            <Typography variant="h5" color="error" textAlign={"center"}>
              404 no coins found{" "}
            </Typography>
          </>
        ) : (
          <Grid container spacing={2}>
            {allCoins.map((coin , index) => (
              <CoinCard key={index} coin={coin} />
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default Home;
