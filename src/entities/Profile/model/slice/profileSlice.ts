import { createSlice } from "@reduxjs/toolkit";
import { ProfileSchema } from "../types/profile";

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {}
})

export const {reducer: profileReducer, actions: profileActions} = profileSlice;