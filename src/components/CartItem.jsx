import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { remove } from "../Features/cart/cartSlice";

const CartItem = ({item}) => {

  const dispatch = useDispatch()

  const handleRemove=(id)=>{
    dispatch(remove(id))
  }
  return (
    <Card sx={{ padding: "20px", margin:"20px 10px " }}>
      <CardMedia
        sx={{ height: 80 }}
        image={item.image.large}
        title="green iguana"
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Name : {item.name}
        </Typography>
        <Typography variant="h6" gutterBottom>
          QTY :{item.quantity}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Price : {(item.market_data.current_price.inr *item.quantity).toFixed(3)} INR
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="error" onClick={()=>handleRemove(item.id)}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
