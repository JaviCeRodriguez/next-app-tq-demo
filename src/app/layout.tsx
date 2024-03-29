import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientMainLayout from "@/components/Layouts/main";
import Providers from "./providers";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ClientMainLayout>
            <div className="border-t">
              <div className="bg-background">
                <div className="grid lg:grid-cols-5">
                  <Sidebar className="" />
                  <div className="col-span-3 lg:col-span-4 lg:border-l">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </ClientMainLayout>
        </Providers>
      </body>
    </html>
  );
}
