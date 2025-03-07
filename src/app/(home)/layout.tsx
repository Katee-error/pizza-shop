import type { Metadata } from "next";
import { Header } from "@/components/layout";

export const metadata: Metadata = {
  title: "E-commerce shop",
  description: "Shop by your needed",
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
      {modal}
    </main>
  );
}
