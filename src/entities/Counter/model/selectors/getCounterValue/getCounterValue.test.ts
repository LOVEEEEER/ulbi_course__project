import { StateSchema } from "app/providers/StoreProvider";
import { getCounterValue } from "./getCounterValue";

describe("getCounterValue", () => {
    const state: DeepPartial<StateSchema> = {
        counter: {
            value: 10,
        },
    };
    test("", () => {
        expect(getCounterValue(state as StateSchema)).toBe(10);
    });
});
