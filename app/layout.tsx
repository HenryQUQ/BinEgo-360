import type { Metadata } from "next";
import { eventInfo } from "./data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: eventInfo.title,
  description: eventInfo.subtitle,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"antialiased"}
      >
        {children}
      </body>
    </html>
  );
}
