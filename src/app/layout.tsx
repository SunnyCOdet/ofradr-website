import type { Metadata } from "next";
import { Inter,Big_Shoulders_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const bigShoulders = Big_Shoulders_Display({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
})
export const metadata: Metadata = {
  title: "MonkeyCoder",
  description: "A landing page for an AI startup created with Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
