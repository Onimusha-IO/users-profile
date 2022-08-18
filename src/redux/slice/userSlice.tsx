import { createSlice } from "@reduxjs/toolkit";

import client from "../../components/Client";

const initialState = {
  list: [],
  filter: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.list = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    filterUsers: (state, action) => {
      state.list = state.list.filter((e: any) => {
        return e.login.uuid !== action.payload;
      });
    },
  },
});

export const getUsers = async (dispatch: any) => {
  try {
    const res = await client.get("/api/?results=15");
    dispatch(setUsers(res.data.results));
  } catch (error) {
    console.log("getUsers Error: ", error);
  }
};

export const { setUsers, setFilter, filterUsers } = userSlice.actions;
export default userSlice.reducer;
