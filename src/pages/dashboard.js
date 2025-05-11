import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Dashboard() {
  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status == "unauthenticated") router.replace("/");
  });

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
