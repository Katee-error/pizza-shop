"use client";
import React from "react";
import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./logo";

export const Footer: React.FC = () => {
  return (
    <footer className="py-5 border-t border-gray-300" id="section3">
      <Container className="flex items-center justify-between py-8">
        <Logo />
        <div className="flex items-center gap-5">
          <Link href={""}>Legal information</Link>
          <Link href={""}>Privacy policy</Link>
          <Link href={""}>Terms of use </Link>
          <Link href={""}>Public offer</Link>
        </div>
      </Container>
    </footer>
  );
};
