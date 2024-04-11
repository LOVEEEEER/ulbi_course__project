import { StateSchema } from "app/providers/StoreProvider"
import { Country } from "entities/Country"
import { Currency } from "entities/Currency"
import { getProfileForm } from "./getProfileForm"

describe('getProfileData', () => {
  const form = {    
    username: "admin",
  age: 18,
  country: Country.Russia,
  city: "Khabarovsk",
  currency: Currency.RUB,
  first: "Nikita",
  lastName: "Demyanenko"
}
  test("should return data", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form
      } 
    }
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  })
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema)).toBe(undefined);
  })
})