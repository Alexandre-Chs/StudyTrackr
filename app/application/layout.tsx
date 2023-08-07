import { DateProvider } from "app/components/Application/Context/DateProvider";
import Navbar from "../components/Application/navbar/Navbar";
import "../components/Application/styles/application.css";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

// Bug with vercel, need to add dynamic here...
export const dynamic = "force-dynamic";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) {
    return redirect("/auth/login");
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
