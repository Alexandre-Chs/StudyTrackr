import Navbar from "@/components/Application/navbar/Navbar";
import "../../components/Application/styles/application.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex backgroundContent">
      <Navbar />
      {children}
    </div>
  );
}
