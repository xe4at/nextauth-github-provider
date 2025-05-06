import { signIn } from "next-auth/react";

export default function Home() {
  const signInHandler = () => {
    signIn("github");
  };
  return (
    <div>
      <h1>Next-auth| github provider</h1>
      <button onClick={signInHandler}>Sign In</button>
    </div>
  );
}
