import { useState } from 'react';

import { Star } from '@/components/SVG/Star';

interface Props {
  isActive?: boolean;
}

const StarComponent = (props: Props) => {
  const [isActive, setIsActive] = useState(props.isActive);

  return (
    <div onClick={() => setIsActive(!isActive)}>
      <Star isActive={isActive} />
    </div>
  );
};

export default StarComponent;
