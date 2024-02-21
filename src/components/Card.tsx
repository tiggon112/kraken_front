import type { ReactNode } from 'react';

type RoundedAProps = {
  className?: String;
  children: ReactNode;
};

const CustomCard = ({ children, className = '' }: RoundedAProps) => {
  return (
    <div className={`${className} w-full rounded-2xl bg-white`}>{children}</div>
  );
};

export { CustomCard };
