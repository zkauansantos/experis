import Image from 'next/image';

import headerImageDesktop from '@/assets/images/header-desktop.jpg';
import headerImageMobile from '@/assets/images/header-mobile.jpg';

import Menu from './Menu';

export default function Header() {
  return (
    <div className="w-full pt-[52px]">
      <Menu />

      <Image
        className="md:hidden w-full object-cover"
        src={headerImageMobile}
        quality={100}
        priority
        alt="Imagem de hambuguer logo"
      />

      <Image
        className="hidden md:block w-full "
        src={headerImageDesktop}
        quality={100}
        priority
        alt="Imagem de hambuguer logo"
      />
    </div>
  );
}
