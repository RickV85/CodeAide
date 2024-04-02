import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "./contexts/AppContext";

export const metadata: Metadata = {
  title: "CodeAide",
  description: "An AI powered developer assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
