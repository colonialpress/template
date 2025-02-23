import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:p-6">
            {children}
        </div>
    </div>
  );
}