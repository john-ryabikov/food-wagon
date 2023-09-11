import React from "react"
import * as ReactDomClinet from "react-dom/client"
import "./scss/index.scss";
import App from "./App.jsx"

const root = ReactDomClinet.createRoot(document.getElementById('root'));
root.render(<App/>);
