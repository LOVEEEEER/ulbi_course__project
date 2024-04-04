import { createSlice } from "@reduxjs/toolkit";
import { ProfileSchema } from "../types/profile";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchProfileData.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { reducer: profileReducer, actions: profileActions } = profileSlice;
