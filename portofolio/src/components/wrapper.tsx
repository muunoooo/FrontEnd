import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div className="mx-10 lg:mx-28">
      {children}
    </div>
  );
}
