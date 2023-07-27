import Header from "@/components/LandingPage/header/Header";
import Navbar from "@/components/LandingPage/navigation_bar/Navbar";

import DashboardImage from "@/components/LandingPage/header/DashboardImage";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <Navbar />
      </div>
      <main className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-third_color via-third_color to-main_color h-auto relative">
        <Header />
        <DashboardImage />
        {/* <Image
          priority
          src={LineSVG}
          alt="svg line"
          className="absolute bottom-0"
        /> */}
      </main>
    </>
  );
}
