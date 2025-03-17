"use client";

import { cn } from "@/shared/lib/utils";
import React from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface Props {
  onChange?: (value?: string) => void;
}


export const AdressInput: React.FC<Props> = ({ onChange}) => {
  return (
      <AddressSuggestions
        token="f428086244640e008d24b435adbe72c7b8771d1e"
        onChange={(data) => onChange?.(data?.value)}
      />
  );
};
