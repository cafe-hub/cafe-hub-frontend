// import ReactDOM from "react-dom/client";
// import "./index.scss";
// import { Provider } from "react-redux";
// import { Root } from "./Root";
// import { store } from "./app/store";
// import React from "react";

// const rootElement = document.getElementById("root") as HTMLElement;
// const root = ReactDOM.createRoot(rootElement);

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <Root />
//     </Provider>
//   </React.StrictMode>
// );

// import ReactDOM from "react-dom/client";

// const rootElement = document.getElementById("root") as HTMLElement;
// const root = ReactDOM.createRoot(rootElement);

// root.render(
//   <h1>hello</h1>
// )

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom"; 
// import "./tailwind.output.css";
// import reportWebVitals from "./reportWebVitals";
import { store } from "./app/store";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <Router> 
      <App />
    </Router>
  </Provider>
);

// reportWebVitals();

// app.tsx
