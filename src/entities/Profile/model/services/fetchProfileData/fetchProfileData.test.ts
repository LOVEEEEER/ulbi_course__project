import { TestAsyncThunk } from "shared/config/tests/TestAsyncThunk/TestAsyncThunk"
import { fetchProfileData } from "./fetchProfileData"

const data = {
  lastName: "Демьяненко123",
  first: "Никита",
  age: 19,
  currency: "EUR",
  country: "Kazakhstan",
  city: "Khabarovsk",
  username: "admin",
  avatar: "https://cdn.vectorstock.com/i/500p/98/87/hacker-logo-vector-22539887.jpg"
}

describe("fetchProfileData", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({data: data}));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalledTimes(1);
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  })
  test("error", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({status: 403}))
    const result = await thunk.callThunk()
    expect(result.meta.requestStatus).toBe("rejected");
  })
})