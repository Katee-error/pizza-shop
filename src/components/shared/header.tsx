import React from 'react';
import { Container } from './container';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('', className)}>
        <Container>

        </Container>
    </header>
  );
};