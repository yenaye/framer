import localFont from 'next/font/local';

export const openSans = localFont<'--font-open-sans'>({
  src: [
    {
      path: '../../public/fonts/openSans/OpenSans-Light.ttf',
      weight: '300',
    },
    {
      path: '../../public/fonts/openSans/OpenSans-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/openSans/OpenSans-Medium.ttf',
      weight: '500',
    },
    {
      path: '../../public/fonts/openSans/OpenSans-SemiBold.ttf',
      weight: '600',
    },
    {
      path: '../../public/fonts/openSans/OpenSans-Bold.ttf',
      weight: '700',
    },
  ],
  display: 'swap',
  variable: '--font-open-sans',
});
