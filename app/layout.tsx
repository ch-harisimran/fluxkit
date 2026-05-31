import "./globals.css";

export const metadata = {
  title: "FluxKit - Production-Ready React Native SaaS Starter",
  description:
    "A premium React Native SaaS starter kit with Supabase, Stripe billing, authentication, push notifications, and developer setup tools."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
