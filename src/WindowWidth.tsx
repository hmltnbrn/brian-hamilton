import React, { useState, useEffect } from 'react';

const windowWidth = <P extends object>(Component: React.ComponentType<P>) => {
  return ({ ...props }) => {
    const [windowWidth, setWindowWidth] = useState<number | null>(window.innerWidth);

    useEffect(() => {
      const handleResize = ():void => {
        setWindowWidth(window.innerWidth);
      }

      window.addEventListener('resize', handleResize);

      return function cleanup() {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
      <Component
        windowWidth={windowWidth}
        {...props as P}
      />
    );
  };
}

export default windowWidth;
