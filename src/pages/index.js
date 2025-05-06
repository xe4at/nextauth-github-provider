import { signIn, signOut } from "next-auth/react";

export default function Home() {
  const signInHandler = () => {
    signIn("github");
  };

  const signOutHandler = () => {
    signOut();
  };

  return (
    <div>
      <h1>Next-auth | GitHub provider</h1>
      <button onClick={signInHandler}>Sign In</button>
      <button onClick={signOutHandler}>Sign Out</button>
    </div>
  );
}
