import React from "react";
import LoginCard from "./loginCard";
import Phones from "./phones";
import Footer from "./footer";

function LoginPage() {
  return (
    <article>
      <div className="container">
        <Phones />
        <LoginCard />
      </div>
      <Footer />
    </article>
  );
}

export default LoginPage;
