import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  LinearProgress,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoin } from "../Features/Coin/coinSlice";
import { useParams } from "react-router-dom";
import { add } from "../Features/cart/cartSlice";

const CoinDetailsPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { coin, isLoading, isError } = useSelector((state) => state.coins);

  if (isLoading) {
    <Container>
      <LinearProgress />
    </Container>;
  }

  if (isError) {
    <Container>
      <Typography variant=" h2" color="error">
        Soemthing went wrong!!
      </Typography>
    </Container>;
  }

  const handleAddToCart = (item) => {
    dispatch(add(item));
  };

  useEffect(() => {
    dispatch(getCoin(params.id));
  }, []);

 

  return (
    <Container sx={{ padding: "80px 0px" }}>
      <Card>
        <CardMedia
          sx={{ height: 250 }}
          image={coin?.image.large}
          title="green iguana"
        />
        <CardContent>
          <Typography variant="h3" gutterBottom>
            Name :{coin?.name}
          </Typography>
          <Typography variant="h4" gutterBottom>
            Symbol :{coin?.symbol}
          </Typography>
          <Typography variant="h4" gutterBottom>
            Price : {coin?.market_data.current_price.inr}INR
          </Typography>
          <Typography variant="body2">
            Description : {coin?.description.en}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="success"
            onClick={()=>handleAddToCart(coin)}
          >
            Add To Cart
          </Button>
          <Button>Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default CoinDetailsPage;
