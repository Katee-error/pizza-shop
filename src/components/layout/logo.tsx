import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <Link href="/">
    <div className="flex items-center gap-4">
      <Image src="/logo.png" alt="Logo" width={35} height={35} />
      <div>
        <h1 className="text-2xl uppercase font-black">Pizza PRO</h1>
        <p className="text-sm text-gray-400 leading-3">This is the best I've ever tasted</p>
      </div>
    </div>
  </Link>
  );
};