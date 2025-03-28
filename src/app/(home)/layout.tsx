import type { Metadata } from "next";
import { Footer, Header } from "@/components/layout";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Pizza Pro",
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
      <Suspense>
        <Header />
      </Suspense>
      {children}
      {modal}
      <Footer/>
    </main>
  );
}
