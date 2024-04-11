import { StateSchema } from "app/providers/StoreProvider"
import { ValidateProfileError } from "../../types/profile"
import { getProfileValidateErrors } from "./getProfileValidateErrors"

describe("getProfileReadonly", () => {
  test("should return true", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_COUNTRY]
      }
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_COUNTRY]);
  })
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toBe(undefined)
  })
})