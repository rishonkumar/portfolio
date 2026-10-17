import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Rishon Kumar Rahi | SAP Hybris Developer & Full Stack Engineer",
  description:
    "Portfolio of Rishon Kumar Rahi — Senior SAP Hybris Developer at Nagarro with expertise in Java, Spring, SAP Commerce, REST APIs, and microservices architecture.",
  keywords: [
    "Rishon Kumar Rahi",
    "SAP Hybris Developer",
    "Java Developer",
    "Spring Boot",
    "Full Stack Developer",
    "Portfolio",
    "SAP Commerce",
  ],
  openGraph: {
    title: "Rishon Kumar Rahi | SAP Hybris Developer",
    description:
      "Senior SAP Hybris Developer building enterprise-grade e-commerce solutions with Java, Spring, and SAP Commerce.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
