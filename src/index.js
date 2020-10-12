import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
//store
import {createStore} from "redux"
import {Provider} from "react-redux"
import reducer from "./redux/reducer"


const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

, document.getElementById("root"));
registerServiceWorker();
