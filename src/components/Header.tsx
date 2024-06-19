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
        alt="Imagem de hambuguer logo"
      />

      <Image
        className="hidden md:block w-full "
        src={headerImageDesktop}
        alt="Imagem de hambuguer logo"
      />
    </div>
  );
}
