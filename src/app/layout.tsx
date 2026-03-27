import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John VanScoyoc For Select Board",
  description:
    "Experience. Independence. Brookline. Re-elect John VanScoyoc to the Brookline Select Board — May 5, 2026.",
  openGraph: {
    title: "John VanScoyoc For Select Board",
    description:
      "Experience. Independence. Brookline. Re-elect John VanScoyoc to the Brookline Select Board — May 5, 2026.",
    url: "https://millxing.github.io/JVS/",
    siteName: "John VanScoyoc For Select Board",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://millxing.github.io/JVS/og-image.jpg",
        width: 916,
        height: 394,
        alt: "Re-Elect John VanScoyoc — Select Board",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John VanScoyoc For Select Board",
    description:
      "Experience. Independence. Brookline. Re-elect John VanScoyoc to the Brookline Select Board — May 5, 2026.",
    images: ["https://millxing.github.io/JVS/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
