import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import DesignerContextProvider from "@/components/context/DesignerContext";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "PageForm (@CodeWithHenry)",
    description: "Check my youtube channel for more content",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <NextTopLoader />
                    <DesignerContextProvider>
                        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                            {children}
                            {/* <Toaster /> */}
                        </ThemeProvider>
                    </DesignerContextProvider>
                </body>
            </html>
        </ClerkProvider>
    )
};