import Input from "./inputsFields";

export function LoginForm() {
    return (
      <div className="loginForm">
        <div className="logo"></div>
        <div className="loginF">
          <form>
            <Input
              className="username"
              type="text"
              name="username"
              placeholder="Phone number, username or email address"
              maxLength={75}
              autoCapitalize="off"
              autoCorrect="off"
              required
            />
            <Input
              className="password"
              type="password"
              name="password"
              placeholder="Password"
              autoCapitalize="off"
              autoCorrect="off"
              required
            />
            <button className="login" disabled type="submit">
              Log in
            </button>
            <div className="orLines">
              <div className="line"></div>
              <div className="or">OR</div>
              <div className="line"></div>
            </div>
            <div className="forgotten">
              <button className="facebookButton" type="button">
                <span className="fbLogo"></span>
                <span>Log in with Facebook</span>
              </button>
              <a
                className="forgotLink"
                href="https://www.instagram.com/accounts/password/reset/"
              >
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
  