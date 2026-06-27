import "./globals.css";
import "./chart-gallery.css";

export const metadata = {
  metadataBase: new URL("https://nationalepoxypros.com"),
  title: "National Epoxy Pros | Digital Bid System",
  description:
    "National Epoxy Pros builds premium epoxy floor systems with a fast digital bid workflow at nationalepoxypros.com.",
  applicationName: "National Epoxy Pros",
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  appleWebApp: {
    title: "National Epoxy",
    capable: true,
    statusBarStyle: "black-translucent",
  },
};

export const viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
