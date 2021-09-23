import React, { Component } from "react";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader/root";
import store from "./redux/store";

export const App = () => {
    const { handleWidget, state } = this;

    return <Provider store={store}></Provider>;
};

export default hot(App);
