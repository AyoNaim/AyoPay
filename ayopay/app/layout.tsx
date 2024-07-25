import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import NavMobile from "@/components/NavMobile";

const inter = Inter({ subsets: ["latin"] });
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-ibm-plex-serif'})

const user = {firstname: 'ayo', lastname:'mide'};
export const metadata: Metadata = {
  title: "Ayo Pay",
  description: "A secure online banking system for its users",
  icons: {
    icon: '../favicon.ico'
  }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex h-screen w-full font-inter">
          <Sidebar user={user}/>
          <div className="flex size-full flex-col">
            <div className="root-layout">
              <Image src={'/logo.svg'} alt='logo' width={30} height={30} />
              <div>
                <NavMobile user={user} />
              </div>
            </div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
