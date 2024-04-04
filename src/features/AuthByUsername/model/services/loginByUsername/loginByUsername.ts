import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

interface LoginByUsernameProps {
    username: string,
    password: string
}

enum LoginErrors {
    INCORRECT_DATA = "",
    SERVER_ERROR = ""
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    "login/loginByUsername",
    async (authData, thunkAPI) => {
        const { dispatch, extra, rejectWithValue } = thunkAPI;
        try {
            const { data } = await extra.api.post<User>("login/", authData);
            if (!data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
            dispatch(userActions.setAuthData(data));
            return data;
        } catch (error) {
            return rejectWithValue("error");
        }
    },
);
