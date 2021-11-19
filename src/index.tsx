import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { fetchPosts } from "./store/post/postSliceThunks";
import { fetchPages } from "./store/page/pageSliceThunks";

// store.dispatch(fetchPosts());
store.dispatch(fetchPages());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
