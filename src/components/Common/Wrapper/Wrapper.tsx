import { cn } from "@/utils/helpers";
import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Wrapper: React.FC<Props> = ({ children, className }) => (
  <div className={cn(className)}>{children}</div>
);
