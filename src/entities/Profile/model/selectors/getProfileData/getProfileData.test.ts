import { StateSchema } from "app/providers/StoreProvider"
import { getProfileData } from "./getProfileData"
import { Country } from "entities/Country"
import { Currency } from "entities/Currency"

describe('getProfileData', () => {
  const data = {    
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
        data
      } 
    }
    expect(getProfileData(state as StateSchema)).toEqual(data);
  })
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toBe(undefined);
  })
})