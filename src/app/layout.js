import { Inter, Lateef, Lato, Russo_One } from "next/font/google";
import "./globals.css";

const baseFont = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Ahware",
    default: "Ahware",
  },
  description:
    "Professor in Human Health Nutrition & Dietetics - (B.Sc., M.Sc., Ph.D., PGD., ANLP, SKPHN, CITI, UASP-IREX)",
  openGraph: {
    title: "Professor Motunrayo Funke Olumakaiye Portfolio",
    description:
      "Leading charge in Public Health Nutrition & Dietetics Innovation",
    url: "https://ahware.tech",
    siteName: "Ahware",
    images: [
      // {
      //   url: "https://mfolumakaiye.com/images/mf_portraits/professor_mfolumakaiye_in_gown.png",
      //   width: 597,
      //   height: 713,
      // },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={baseFont.className}>{children}</body>
    </html>
  );
}
