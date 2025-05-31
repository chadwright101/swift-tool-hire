import type { Metadata } from "next";

import { Noto_Sans } from "next/font/google";

import { Header } from "@/_components/navigation/header/header";
import { Footer } from "@/_components/navigation/footer/footer";

import "@/_styles/globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://swifttoolhire.co.za/"),
  title: "Swift Tool Hire - Plettenberg Bay",
  description:
    "Swift Tool Hire in Plettenberg Bay offers tool and equipment rentals, including heavy machinery and power tools, alongside scaffolding hire, power tool repairs, and core drilling services, all with competitive pricing and a customer-first approach.",
  keywords:
    "tool hire, equipment rental, scaffolding hire, power tool repairs, core drilling, Plettenberg Bay, heavy machinery rental, power tools, competitive pricing, customer service",
  openGraph: {
    description:
      "Swift Tool Hire in Plettenberg Bay offers tool and equipment rentals, including heavy machinery and power tools, alongside scaffolding hire, power tool repairs, and core drilling services, all with competitive pricing and a customer-first approach.",
    type: "website",
    locale: "en_ZA",
    siteName: "Swift Tool Hire - Plettenberg Bay",
    images: [
      {
        url: "/open-graph-image.webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
