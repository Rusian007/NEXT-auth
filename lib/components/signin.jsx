const errors = {
  Signin: "Try signing with a different account.",
  OAuthSignin: "Try signing with a different account.",
  OAuthCallback: "Try signing with a different account.",
  OAuthCreateAccount: "Try signing with a different account.",
  EmailCreateAccount: "Try signing with a different account.",
  Callback: "Try signing with a different account.",
  OAuthAccountNotLinked:
    "To confirm your identity, sign in with the same account you used originally.",
  EmailSignin: "Check your email address.",
  CredentialsSignin:
    "Sign in failed. Check the details you provided are correct.",
  default: "Unable to sign in.",
};
 const SignInError = ({ error }) => {
  const errorMessage = error && (errors[error] ?? errors.default);
  return (
    <>
    <style jsx>{`
		  div {
		    font-size: 14px;
        color: red;
        font-weight: 300;
        padding: 5px;
		  }
		`}</style>
    <div >{errorMessage}</div>
    </>
  );
};
module.exports = SignInError
