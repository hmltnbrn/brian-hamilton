import React, { useState, useEffect } from 'react';

const windowWidth = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  return ({ ...props }: any): JSX.Element => {
    const [innerWindowWidth, setWindowWidth] = useState<number | null>(
      window.innerWidth
    );

    useEffect((): any => {
      const handleResize = (): void => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return function cleanup(): void {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return <Component windowWidth={innerWindowWidth} {...(props as P)} />;
  };
};

export default windowWidth;
