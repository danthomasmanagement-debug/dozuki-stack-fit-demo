import "./globals.css";

export const metadata = {
  title: "LineGuard Manual-to-Digital Work Instruction Demo",
  description:
    "Fictional Dozuki-ready workflow that turns paper manuals and form fill-out into visual guides, live updates, training, feedback, audit trails, and production debugging"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
