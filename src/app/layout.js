import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "@/app/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Architectures Playground',
  description: 'Exploration and comparison of four distinct software architectures (Monolithic, Client-Server, Microservices, Layered) within a React application.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head/>
            <body className={inter.className}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
