import { useRef } from "react";

function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

    function handleFocusEmail() {
    emailRef.current.focus();
  }

  function handleClear() {
    emailRef.current.value = "";
    passwordRef.current.value = "";
    handleFocusEmail();
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      passwordRef.current.focus();
    }
  }

  function handleLogin(e) {
    e.preventDefault();
    console.log("Login submitted");
  }

  setTimeout(handleFocusEmail, 0);

  return (
    <div>
      <h2>🔐 Login</h2>

      <form onSubmit={handleLogin}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            ref={emailRef}
            onKeyDown={handleKeyDown}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label>Password: </label>
          <input
            type="password"
            ref={passwordRef}
            placeholder="Enter your password"
          />
        </div>

        <div className="button-group">
          <button type="submit">Login</button>
          <button type="button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
