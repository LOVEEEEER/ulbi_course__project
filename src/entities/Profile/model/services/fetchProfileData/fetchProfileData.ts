import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { ProfileType } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<ProfileType, void, ThunkConfig<string>>(
    "profile/fetchProfileData",
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const { data } = await extra.api.get<ProfileType>("profile/");

            if (!data) {
                throw new Error();
            }

            return data;
        } catch (error) {
            return rejectWithValue("error");
        }
    },
);
