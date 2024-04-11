import { TestAsyncThunk } from "shared/config/tests/TestAsyncThunk/TestAsyncThunk"
import { validateProfileData } from "./validateProfileData";
import { ProfileType, ValidateProfileError } from "../../types/profile";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";

const data: ProfileType = {
  lastName: "Демьяненко123",
  first: "Никита",
  age: 19,
  currency: Currency.EUR,
  country: Country.Kazakhstan,
  city: "Khabarovsk",
  username: "admin",
  avatar: "https://cdn.vectorstock.com/i/500p/98/87/hacker-logo-vector-22539887.jpg"
}

describe("validateProfileData", () => {
  test("success", () => {
      const result = validateProfileData(data);
      expect(result).toEqual([]);
  })    
  test("without first and last name", () => {
    const result = validateProfileData({...data, first: "", lastName: ""});
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  })
  test("incorrect age", () => {
    const result = validateProfileData({...data, age: undefined});
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  })
  test("incorrect country", () => {
    const result = validateProfileData({...data, country: undefined});
    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  })
  test("incorrect all", () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  })
})