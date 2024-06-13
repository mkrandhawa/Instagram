import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from './reportWebVitals';

//import LoginPage from "./login/loginPage";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// //Main Container
// function App() {
//   return (
//     <main className="main">
//       <div className="container">
//         <LoginPage />
//       </div>
//     </main>
//   );
// }

//Loading the code in browser
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();