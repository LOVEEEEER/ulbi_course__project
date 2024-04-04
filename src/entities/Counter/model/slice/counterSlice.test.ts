import { counterReducer, counterActions } from "./counterSlice";
import { CounterSchema } from "../types/CounterSchema";

describe("counterSlice", () => {
    test("test increment action", () => {
        const state: DeepPartial<CounterSchema> = {
            value: 10,
        };
        expect(counterReducer(state as CounterSchema, counterActions.increment)).toEqual({ value: 11 });
    });

    test("test decrement action", () => {
        const state: DeepPartial<CounterSchema> = {
            value: 10,
        };
        expect(counterReducer(state as CounterSchema, counterActions.decrement)).toEqual({ value: 9 });
    });

    test("shold work with empty state", () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});
