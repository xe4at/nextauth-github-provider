import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { status } = useSession();

  const signInHandler = () => {
    signIn("github");
  };

  const signOutHandler = () => {
    signOut();
  };

  return (
    <div>
      <h1>Next-auth | GitHub provider</h1>

      {status === "unauthenticated" && (
        <button onClick={signInHandler}>Sign In</button>
      )}

      {status === "authenticated" && (
        <>
          <button onClick={signOutHandler}>Sign Out</button>

          <Link href="/dashboard">
            <button>Dashboard</button>
          </Link>

          <Link href="/ssrdashboard">
            <button>SSR Dashboard</button>
          </Link>
        </>
      )}
    </div>
  );
}
