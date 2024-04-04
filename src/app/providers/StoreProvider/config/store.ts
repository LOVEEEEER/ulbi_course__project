import {
    CombinedState,
    Reducer,
    ReducersMapObject, configureStore, getDefaultMiddleware,
} from "@reduxjs/toolkit";
import type { NavigateFunction } from "react-router-dom";
import { counterReducer } from "entities/Counter";
import { $api } from "shared/api/api";
import { userReducer } from "entities/User";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { createReducerManager } from "./reducerManager";

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
    navigate?: NavigateFunction,
) {
    // @ts-ignore
    const rootReducers: ReducersMapObject = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
