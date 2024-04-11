import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { profileActions, profileReducer } from "./profileSlice";
import { ProfileSchema, ProfileType, ValidateProfileError } from "../types/profile";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const data: ProfileType = {
  lastName: "Демьяненко123",
  first: "Никита",
  age: 19,
  currency: Currency.RUB,
  country: Country.Russia,
  city: "Khabarovsk",
  username: "admin",
  avatar: "https://cdn.vectorstock.com/i/500p/98/87/hacker-logo-vector-22539887.jpg"
}

describe("profileSlice", () => {
  test("test set readonly", () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false
    }
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({readonly: true})
  })

  test("test cancel edit", () => {
    const state: DeepPartial<ProfileSchema> = {
        data,
        form: data,
        readonly: false
    }
    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual(
      {
        readonly: true,
        validateErrors: undefined,
        form: data,
        data,
      })
  })

  test("test update profile", () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {username: ""}
    }
    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({username: "123456"}))).toEqual({
      form: {username: "123456"}
    })
  })

  test("test update profile service pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    }
    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateErrors: undefined,
    })
  })
  
  test("test update profile service fulfilled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    }
    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ""))).toEqual({
      isLoading: false,
      readonly: true,
      validateErrors: undefined,
      form: data,
      data
    })
  })
})