import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AntDLockedInput, MuiLockedInput } from "./LockedInput";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <div className="input-wrapper">
        <MuiLockedInput
          label="Example MUI TextInput"
          name="mui-locked-example"
        />
      </div>
      <div className="input-wrapper">
        <AntDLockedInput
          label="Example ANT Design TextInput"
          name="andt-locked-example"
        />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
