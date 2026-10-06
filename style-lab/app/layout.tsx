import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LCL — Style Lab",
  description: "Explore a visual language for LCL. One trimetric station, many possible worlds.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
