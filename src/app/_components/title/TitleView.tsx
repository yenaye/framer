import clsx from 'clsx';
import * as motion from 'motion/react-client';

import type { TTitleViewProps } from '@/app/_components/title/type';

const TitleView = ({ scope, isFullTitle }: TTitleViewProps) => (
  <div className="h-screen content-center overflow-x-hidden text-center">
    <motion.div
      className={clsx('text-140 font-bold text-white text-shadow-title', {
        'cursor-pointer': isFullTitle,
      })}
      ref={scope}
      {...(isFullTitle && { whileHover: { textShadow: 'none' } })}
    >
      {isFullTitle ? 'STUDIO GHIBLI' : 'G'}
    </motion.div>
  </div>
);

export default TitleView;
