import { CubeTransparentIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { acme } from '@/app/ui/fonts';
import { FC } from 'react';

interface LogoProps {
  colors: string;
}

const AcmeLogo: FC<LogoProps> = ({ colors }) => {
  return (
    <div
      className={`${acme.className} flex flex-row items-center leading-none ${colors}`}
    >
      <CubeTransparentIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[40px]"> Acme</p>
    </div>
  );
};

export default AcmeLogo;
