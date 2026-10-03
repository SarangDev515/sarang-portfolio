import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sarang T | Python–Odoo Developer",
  description:
    "Portfolio of Sarang T, a Python–Odoo Developer specializing in ERP customization, automation, and integrations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
