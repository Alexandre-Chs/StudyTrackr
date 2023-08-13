import Navbar from "./components/LandingPage/navigation_bar/Navbar";
import DashboardImage from "./components/LandingPage/header/DashboardImage";
import ExplainProject from "./components/LandingPage/content/ExplainProject";
import QuestionsAboutProject from "./components/LandingPage/questions/QuestionsAboutProject";
import Footer from "./components/LandingPage/footer/Footer";
import Header from "./components/LandingPage/header/Header";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <Navbar />
      </div>
      <main className="relative h-full backgroundColor">
        <Header />
        <DashboardImage />
        <article className="w-full bg-secondary_color">
          <ExplainProject />
          <QuestionsAboutProject />
        </article>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}
