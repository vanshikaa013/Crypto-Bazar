import { Flag, Pending } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coinService from "./coinService";

const coinSlice = createSlice({
  name: "coins",
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    coin:null,
    message: "",
    allCoins: null,
    
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTrendingCoins.pending, (state, action) => {
        (state.isLoading = true),
          (state.isError = false),
          (state.isSuccess = false);
      })
      .addCase(getTrendingCoins.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isError = false),
          (state.isSuccess = true),
          (state.allCoins = action.payload);
      })
      .addCase(getTrendingCoins.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.isSuccess = false),
          (state.message = action.payload);
      })
      .addCase(getCoin.pending, (state, action) => {
        (state.isLoading = true),
          (state.isError = false),
          (state.isSuccess = false);
      })
      .addCase(getCoin.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isError = false),
          (state.isSuccess = true),
          (state.coin = action.payload);
      })
      .addCase(getCoin.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.isSuccess = false),
          (state.message = action.payload);
      });
  },
});

export default coinSlice.reducer;

// fetch coin and set into state using thunkAPI

export const getTrendingCoins = createAsyncThunk("FETCH/COINS", async () => {
  try {
    return await coinService.fetchTrendingCoins();
  } catch (error) {
    console.log(error);
  }
});

export const getCoin = createAsyncThunk("FETCH/COIN", async (id) => {
    try {
      return await coinService.fetchCoin(id);
    } catch (error) {
      console.log(error);
    }
  });

