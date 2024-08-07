import { auth } from "@/auth";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import TanstackProvider from "@/providers/TanstackProvider";
import { currentUser } from "@/lib/currentUser";

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
