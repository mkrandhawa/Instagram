import React from "react";
import GetApp from "./getApp";
import Account from "./account";
import { LoginForm } from "./loginForm";

//Login Form
function LoginCard() {
  return (
    <main className="loginCard">
      <LoginForm />
      <Account question = "Don't have an account? "text="Sign up" path='/accounts/signup'/>
      <GetApp />
    </main>
  );
}

export default LoginCard;
