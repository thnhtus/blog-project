import { User } from "@/models/user";
import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  userInfo?: User | undefined;
}

type CR<T> = CaseReducer<State, PayloadAction<T>>;

const initialState: State = {};

//reducers
const setUserInfoCR: CR<User | undefined> = (state, action) => ({
  ...state,
  userInfo: action.payload,
});

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: setUserInfoCR,
  },
  extraReducers: () => {},
});

export const { setUserInfo } = slice.actions;

export default slice.reducer;
