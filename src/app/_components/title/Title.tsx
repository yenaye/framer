'use client';

import { useEffect, useState } from 'react';

import { useAnimate } from 'motion/react';

import TitleView from './TitleView';
import type { TTitleViewProps } from './type';

const Title = () => {
  const [isFullTitle, setIsFullTitle] = useState<boolean>(false);
  const [scope, animate] = useAnimate();

  const setAnimate = () => {
    const x = animate(
      scope.current,
      { x: [-500, 0] },
      {
        duration: 2.8,
        ease: 'linear',
        repeat: 0,
      }
    );
    const y = animate(
      scope.current,
      { y: [-150, 0] },
      {
        duration: 0.4,
        ease: 'circIn',
        repeat: Infinity,
        repeatType: 'reverse',
      }
    );

    x.then(() => {
      y.stop();
      setIsFullTitle(true);
    });
  };

  useEffect(() => {
    setAnimate();
  }, []);

  const props: TTitleViewProps = {
    scope,
    isFullTitle,
  };

  return <TitleView {...props} />;
};

export default Title;
