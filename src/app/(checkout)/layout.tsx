
import { Container, Header } from '@/components/layout';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Pizza Pro | Cart',
};

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#F4F1EE]">
      <Container>
        <Suspense>
          <Header hasSearch={false} className="border-b-gray-200" />
        </Suspense>
        {children}
      </Container>
    </main>
  );
}
