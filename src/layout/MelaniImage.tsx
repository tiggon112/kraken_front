import type { ReactNode } from 'react';

type MelaniImageProps = {
  className?: string;
  children?: ReactNode;
  srcPath?: string;
};

const MelaniImage = (props: MelaniImageProps) => {
  return (
    <img
      src={`${props.srcPath}`}
      alt=""
      className={`${props.className} object-cover object-center`}
    />
  );
};

export { MelaniImage };
