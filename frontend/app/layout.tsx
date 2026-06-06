import "./globals.css";

export const metadata = {
  title: "Dozuki Stack Fit Demo",
  description: "Connected-worker demo for a Dozuki Software Engineer II interview"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

