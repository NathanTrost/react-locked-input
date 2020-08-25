import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AntDLockedInput, MuiLockedInput, RbsLockedInput } from "./LockedInput";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <div className="demo-container">
      <div className="demo-input-wrapper">
        <AntDLockedInput
          label="Ant Design"
          name="antd-locked-example"
          placeholder="Locked Example"
        />
      </div>

      <div className="demo-input-wrapper">
        <MuiLockedInput
          label="Material Design"
          name="mui-locked-example"
          placeholder="Locked Example"
        />
      </div>

      <div className="demo-input-wrapper">
        <RbsLockedInput
          label="React-Bootstrap"
          name="rbs-locked-example"
          placeholder="Locked Example"
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
