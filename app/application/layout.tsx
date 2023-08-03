import { DateProvider } from "app/components/Application/Context/DateProvider";
import Navbar from "../components/Application/navbar/Navbar";
import "../components/Application/styles/application.css";
import { getServerSession } from "next-auth";
import { options } from "app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <div className="flex w-full h-full backgroundContent">
      <DateProvider>
        <Navbar />
        {children}
      </DateProvider>
    </div>
  );
}
