import { cn } from "@/lib/utils";

import TanstackProvider from "@/providers/TanstackProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "RAAY",
  description: "Anonymous Feedback webapp",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "relative h-full bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <SessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TanstackProvider>
              <main className="flex flex-col relative min-h-screen ">
                <div className="flex-grow flex-1">{children}</div>
              </main>
            </TanstackProvider>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
