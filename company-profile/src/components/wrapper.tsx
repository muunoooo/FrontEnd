import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div className="lg:mx-28">
      {children}
    </div>
  );
}
