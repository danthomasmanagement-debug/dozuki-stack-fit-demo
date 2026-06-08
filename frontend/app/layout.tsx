import "./globals.css";

export const metadata = {
  title: "Dozuki Stack Fit Demo",
  description: "Connected-worker engineering demo for manufacturing quality workflows"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
