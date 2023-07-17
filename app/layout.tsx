import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import AuthProvider from "@/context/AuthProvider";

const inter = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StudyTrackr",
  description:
    "An app to organize studies, set revision alerts, and ace exams with ease.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
