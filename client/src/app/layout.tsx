import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { apolloClient } from "@/queries/apolloClient";
import ApolloProvider from "@/queries/apolloProvider";
import { ToastContainer } from "react-toastify";
import { MonitorProvider } from "@/context/MonitorContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uptimer"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloProvider client={apolloClient}>
          <MonitorProvider>
            {children}
          </MonitorProvider>
          <ToastContainer />
        </ApolloProvider>
      </body>
    </html>
  );
}
