import { Login } from "@/components/Login/Login";
import { PublicRoutes } from "@/components/Routes/PublicRoutes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <PublicRoutes>
        <Login />
      </PublicRoutes>
    </main>
  );
}
