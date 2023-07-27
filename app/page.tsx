<<<<<<< HEAD
import Navbar from "@/components/navigation/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
    </div>
=======
import Header from "@/components/LandingPage/header/Header";
import Navbar from "@/components/LandingPage/navigation_bar/Navbar";
import LineSVG from "@/app/assets/LandingPage/line.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <Navbar />
      </div>
      <main className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-third_color via-third_color to-main_color h-screen relative">
        <Header />
        <Image
          priority
          src={LineSVG}
          alt="svg line"
          className="absolute bottom-0"
        />
      </main>
    </>
>>>>>>> ad2c3f75cfc26c8a2ed0634e9a678d770e56d88c
  );
}
