import { TestAsyncThunk } from "shared/config/tests/TestAsyncThunk/TestAsyncThunk"
import { updateProfileData } from "./updateProfileData";
import { ValidateProfileError } from "../../types/profile"

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
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      }
    });

    thunk.api.put.mockReturnValue(Promise.resolve({data}));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  })

  test("error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      }
    });
    thunk.api.put.mockReturnValue(Promise.resolve({status: 403}))
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([
      ValidateProfileError.SERVER_ERROR
    ])
  })

  test("validate error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: {...data, lastName: ""},
      }
    });
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA
    ])
  })
})