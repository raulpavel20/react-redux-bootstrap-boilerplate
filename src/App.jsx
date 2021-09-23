import React, { Component } from "react";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader/root";
import store from "./redux/store";

export const App = () => {
    return <Provider store={store} />;
};

export default hot(App);
