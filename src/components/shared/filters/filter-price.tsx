import { Input, RangeSlider } from '@/components/ui';
import React from 'react';

interface Props {
  className?: string;
}

export const FilterPrice: React.FC<Props> = ({ className }) => {
  return (
    <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
    <p className="font-bold mb-3">Цена от и до:</p>
    <div className="flex gap-3 mb-5">
      <Input
        type="number"
        placeholder="0"
        min={0}
        max={1000}
        defaultValue={0}
      />
      <Input type="number" min={100} max={1000} placeholder="1000" />
    </div>
    <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
  </div>
  );
};