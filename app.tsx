import * as React from "react";
import * as ReactDOM from "react-dom";
import LogoComponent from "./src/LogoComponent";
import UserComponent from "./src/UserComponent";
ReactDOM.render(
<div>
<h1>Hello, Welcome to my Profile page</h1>
<LogoComponent/>
<UserComponent name="Tortuga User" age={57} address="123 Main st USA" dob={new Date()} />
</div>,
  document.getElementById("root")
);