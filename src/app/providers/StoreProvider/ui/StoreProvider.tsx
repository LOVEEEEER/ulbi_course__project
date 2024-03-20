import { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/StateSchema";

interface StoreProviderProps {
    initialState?: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: FC<PropsWithChildren<StoreProviderProps>> = (props) => {
    const { children, initialState, asyncReducers } = props;

    const store = createReduxStore(initialState as StateSchema, asyncReducers);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
