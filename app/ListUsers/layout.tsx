import { Navbar } from "@/components/Navbar";
import { PrivateRoutes } from "@/components/Routes/PrivateRoutes";

export default function ListUserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrivateRoutes>
      <Navbar />
      {children}
    </PrivateRoutes>
  );
}
