import "./globals.css";

export const metadata = {
  title: "LineGuard Connected Worker Workflow",
  description:
    "Fictional manufacturing workflow for guided instructions, evidence capture, audit trails, and production debugging"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
