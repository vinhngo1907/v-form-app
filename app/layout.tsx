import React, { ReactNode } from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "PageForm (@CodeWithKliton)",
    description: "Check my youtube channel for more content",
};

export default function RootLayout({ children }: { childern: ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <NextTopLoader />
                    {/* <DesignerConntextProvider> */}
                    {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange> */}
                        {children}
                        {/* <Toaster /> */}
                    {/* </ThemeProvider> */}
                    {/* </DesignerConntextProvider> */}
                </body>
            </html>
        </ClerkProvider>
    )
};