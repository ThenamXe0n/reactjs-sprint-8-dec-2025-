# react router for page routing 

## installation 
```
npm i react-router
```
---
## import BrowserRouter from react-router in main file
```
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

```

### created routes for our website in app.jsx
- Routes === to create route in website . we write Route inside Routes
- Route === these are self colsed . 
  - path => this contain pathname e.g "/" ,"/about"
  - element => we can write jsx or component or pages inside it 


### flow 
```
<!-- <BrouserRouter> -->
  <Routes>
      <Route />
  </Routes>
<!-- </BrowserRouter> -->
```