import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { ProfileType } from "../../types/profile";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";

export const updateProfileData = createAsyncThunk<ProfileType, void, ThunkConfig<string>>(
    "profile/updateProfileData",
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        const formData = getProfileForm(getState());

        try {
            const { data } = await extra.api.put<ProfileType>("profile/", formData);
            return data;
        } catch (error) {
            return rejectWithValue("error");
        }
    },
);
